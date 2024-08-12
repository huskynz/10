;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1df047e6-8603-4dac-91dd-50851ac32c1a",e._sentryDebugIdIdentifier="sentry-dbid-1df047e6-8603-4dac-91dd-50851ac32c1a")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>My blog is coming soon</p>";

				const frontmatter = {"title":"My blog is coming soon","summary":"My blog is coming soon","date":"Jul 27 2024","draft":false,"tags":["Coming Soon"]};
				const file = "C:/Users/peter/repos/10/src/content/blog/coming-soon/index.md";
				const url = undefined;
				function rawContent() {
					return "My blog is coming soon";
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
//# sourceMappingURL=index_Bm4WldTq.mjs.map
