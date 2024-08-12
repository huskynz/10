;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d4fc233d-a6c3-4c3b-8364-2a0b345d3aba",e._sentryDebugIdIdentifier="sentry-dbid-d4fc233d-a6c3-4c3b-8364-2a0b345d3aba")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><a href=\"https://github.com/huskynz/6\">Learn more</a></p>\n<p><img src=\"https://serv.serv.hnz.li/peter-port/Screenshot_20231020_185537.png\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"HuskyNZ's Gen6 Website","summary":"While I don't use it anymore because I've switched to using Free Flarum, this was one of my first coding projects. It's not that great, and we don't really discuss why it's Gen6.","date":"Jul 28 2024","draft":false,"tags":["Year 2022-2023","Azure app service"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/HuskyNZ's Gen6 Website/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n[Learn more](https://github.com/huskynz/6)\r\n\r\n![Project Image](https://serv.serv.hnz.li/peter-port/Screenshot_20231020_185537.png)\r\n";
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
//# sourceMappingURL=index_l88Wmy7e.mjs.map
