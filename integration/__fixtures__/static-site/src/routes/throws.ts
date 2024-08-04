import { defineRoute } from '@gracile/gracile/route';
import { html } from '@gracile/gracile/server-html';

import { document } from '../documents/document-minimal.js';

export default defineRoute({
	document: (context) => document({ ...context, title: 'Gracile - Oh no' }),

	template: (context) => {
		throw new Error('!!! OH NO !!! I AM A FAKE ERROR !!!');
		html`
			<h1>⚠️ Arrrrrhh !!</h1>

			<p><code>${context.url.toString()}</code> not found.</p>
		`;
	},
});
