import { Readable } from 'node:stream';

import { logger } from '@gracile/internal-utils/logger';
import c from 'picocolors';
import type { ViteDevServer } from 'vite';

import { isUnknownObject, type UnknownObject } from '../assertions.js';
import { errorPage } from '../errors/templates.js';
import { renderRouteTemplate } from '../render/route-template.js';
import { renderSsrTemplate } from '../render/utils.js';
import { getRoute } from '../routes/match.js';
import type * as R from '../routes/route.js';

// type NextFunction = (error?: unknown) => void | Promise<void>;

/**
 * This is fully compatible with Express or bare Node HTTP
 * What it adds on top of Connect-style middleware:
 * 1. Async.
 * 2. Can return a `ServerResponse`
 */
export type GracileAsyncMiddleware = (
	request: Request,
	locals?: unknown,
) => Promise<Response | Readable | null>;

export function createGracileMiddleware({
	vite,
	routes,
	routeImports,
	routeAssets,
	root,
	serverMode,
}: {
	vite?: ViteDevServer | undefined;
	routes: R.RoutesManifest;
	routeImports?: R.RoutesImports | undefined;
	routeAssets?: R.RoutesAssets;
	root: string;
	serverMode?: boolean | undefined;
}) {
	async function createErrorPage(urlPath: string, e: Error) {
		logger.error(e.message);

		let errorPageHtml = await renderSsrTemplate(errorPage(e));
		if (vite)
			errorPageHtml = await vite.transformIndexHtml(urlPath, errorPageHtml);

		return { errorPageHtml, headers: { 'Content-Type': 'text-html' } };
	}

	const middleware: GracileAsyncMiddleware = async (request, locals) => {
		// HACK: Typing workaround
		if (!request.url) throw Error('Incorrect url');
		if (!request.method) throw Error('Incorrect method');
		const { url: urlPath, method } = request;

		// if (urlPath === '/favicon.ico') return next();

		try {
			// NOTE: Maybe it should be constructed from `req`
			const fullUrl = request.url;

			// MARK: Get route infos

			const routeOptions = {
				url: fullUrl,
				vite,
				routes,
				routeImports,
			};

			const routeInfos = await getRoute(routeOptions).catch(async (error) => {
				// MARK: User defined Gracile 404
				logger.error(String(error));
				const url = new URL('/404/', fullUrl).href;
				const options = { ...routeOptions, url };
				const notFound = await getRoute(options).catch(() => null);
				return notFound;
			});

			if (routeInfos === null) {
				// MARK: Default, fallback 404
				const message = `404 not found!\n\n---\n\nCreate a /src/routes/404.{js,ts} to get a custom page.\n${method} - ${urlPath}`;

				const { errorPageHtml, headers } = await createErrorPage(
					urlPath,
					new Error(message),
				);
				return new Response(errorPageHtml, {
					headers,
					status: 404,
					statusText: '404 not found!',
				});
			}

			const routeTemplateOptions = {
				request,
				vite,
				mode: 'dev', // vite && vite.config.mode === 'dev' ? 'dev' : 'build',
				routeAssets,
				root,
				serverMode,
				routeInfos,
			} as const;

			logger.info(`[${c.yellow(method)}] ${c.yellow(urlPath)}`, {
				timestamp: true,
			});

			let output: Readable | Response | null;

			let providedLocals: UnknownObject = {};
			if (locals && isUnknownObject(locals)) providedLocals = locals;

			// MARK: Server handler

			const handler = routeInfos.routeModule.handler;

			const responseInit: ResponseInit = {};
			// TODO: should move this to `special-file` so we don't recalculate on each request
			// + we would be able to do some route codegen.

			if (
				('handler' in routeInfos.routeModule &&
					typeof handler !== 'undefined') ||
				(handler && 'GET' in handler === false && method !== 'GET')
			) {
				const routeContext = Object.freeze({
					request,
					url: new URL(fullUrl),
					response: responseInit,
					params: routeInfos.params,
					locals: providedLocals,
				});

				// MARK: Run user middleware

				// NOTE: Experimental
				// eslint-disable-next-line no-inner-declarations
				// async function useHandler() {}
				// if (vite) {
				// 	const middleware = await vite
				// 		.ssrLoadModule('/src/middleware.ts')
				// 		.catch(() => null)
				// 		.then((m) => m.default);

				// 	if (middleware)
				// 		await middleware(
				// 			routeContext,
				// 			async () => {
				// 				await useHandler();
				// 			},
				// 		);
				// 	else await useHandler();
				// } else {
				// 	await useHandler();
				// }
				//
				// MARK: Top level handler

				if (typeof handler === 'function') {
					const handlerOutput = (await Promise.resolve(
						handler(routeContext),
					)) as unknown;
					if (handlerOutput instanceof Response) output = handlerOutput;
					else
						throw new TypeError(
							'Catch-all handler must return a Response object.',
						);

					// MARK: Handler with method
				} else if (method in handler) {
					const handlerWithMethod = handler[method as keyof typeof handler];

					if (typeof handlerWithMethod !== 'function')
						throw TypeError('Handler must be a function.');

					const handlerOutput = await Promise.resolve(
						handlerWithMethod(routeContext) as unknown,
					);

					if (handlerOutput instanceof Response) output = handlerOutput;
					else {
						output = await renderRouteTemplate({
							...routeTemplateOptions,
							handlerInfos: { data: handlerOutput, method },
							routeInfos,
						}).then((r) => r.output);
					}

					// MARK: No GET, render page
				} else {
					const statusText = `This route doesn't handle the \`${method}\` method!`;
					return new Response(statusText, { status: 405, statusText });
				}
			} else {
				output = await renderRouteTemplate({
					...routeTemplateOptions,
					handlerInfos: { data: null, method: 'GET' },
					routeInfos,
				}).then((r) => r.output);
			}

			// MARK: Return response

			// NOTE: try directly with the requestPonyfill. This might not be necessary
			if (output instanceof Response) {
				if (output.status >= 300 && output.status <= 303) {
					const location = output.headers.get('location');

					if (location) {
						return Response.redirect(location, output.status);
					}
				}

				return output;

				// MARK: Stream page render
			}

			// MARK: Page stream error

			return !output
				? null
				: output.on('error', (error) => {
						const errorMessage =
							`There was an error while rendering a template chunk on server-side.\n` +
							`It was omitted from the resulting HTML.`;
						logger.error(errorMessage);
						logger.error(error.message);

						if (vite)
							setTimeout(() => {
								vite.hot.send('gracile:ssr-error', {
									message: errorMessage,
								});
							}, 500);
					});

			// MARK: Errors
		} catch (e) {
			const error = e as Error;

			if (vite) vite.ssrFixStacktrace(error);

			const { errorPageHtml: ultimateErrorPage, headers } =
				await createErrorPage('__gracile_error', error);

			return new Response(String(ultimateErrorPage), {
				headers,
				status: 500,
				statusText: 'Gracile middleware error',
			});
		}
	};

	return middleware;
}
