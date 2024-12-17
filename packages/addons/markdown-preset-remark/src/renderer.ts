import { MarkdownRendererBase } from '@gracile/markdown/renderer';

import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';

import remarkFrontmatterYaml from 'remark-frontmatter-yaml';

export class MarkdownRenderer extends MarkdownRendererBase {
	async parseDocument() {
		if (this.source === null) {
			throw Error('No source set for document.');
		}
		const file = unified()
			.use(remarkParse)
			.use(remarkFrontmatter)
			.use(remarkFrontmatterYaml)
			.use(remarkGfm)
			.use(remarkRehype)
			.use(remarkStringify)
			.processSync(this.source);

		const frontmatter: any = file.data['frontmatter'];
		const content = String(file);

		this.setHtml(content);
		if (Object.keys(frontmatter).includes('title')) {
			this.setTitle(frontmatter.title);
		}

		this.setSourceYaml(YAML.stringify(frontmatter));
		this.setSourceMarkdown(content);
	}
}
