;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3f73a4f3-abcf-4eb3-9195-c2a787c35779",e._sentryDebugIdIdentifier="sentry-dbid-3f73a4f3-abcf-4eb3-9195-c2a787c35779")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"https://serv.hnz.li/peter-port/Screenshot_20231020_153230.png\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"Rolleston College Film Club","summary":"I worked with two other developers on building a website for our film club to help people get to know who we are.","date":"Jul 28 2024","draft":false,"tags":["Year 2023","Astro","Tailwind","CSS"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/Rolleston College Film Club/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Project Image](https://serv.hnz.li/peter-port/Screenshot_20231020_153230.png)\r\n";
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
//# sourceMappingURL=index_GBhFbWWZ.mjs.map
