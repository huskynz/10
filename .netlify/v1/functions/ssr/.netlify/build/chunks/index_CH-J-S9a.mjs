;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c2f6fef0-1a0f-47e1-9339-bbe05c56bdf4",e._sentryDebugIdIdentifier="sentry-dbid-c2f6fef0-1a0f-47e1-9339-bbe05c56bdf4")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Work is Comeing Soon and will be displayed something like this</p>";

				const frontmatter = {"title":"Work is Comeing Soon","summary":"Work is Comeing Soon","company":"Comeing Soon","role":"Comeing Soon","dateStart":"Jul 28 2024","dateEnd":"Jul 28 2024","draft":false,"tags":["Comeing Soon"]};
				const file = "C:/Users/peter/repos/10/src/content/work/index.md";
				const url = undefined;
				function rawContent() {
					return "Work is Comeing Soon and will be displayed something like this\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=index_CH-J-S9a.mjs.map
