;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="cb8892b3-219d-4225-b249-de84a535178b",e._sentryDebugIdIdentifier="sentry-dbid-cb8892b3-219d-4225-b249-de84a535178b")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><a href=\"https://huskynz-my.sharepoint.com/:w:/g/personal/peter_husky_nz/EZbs4uc5tRhKvlEcg0QsVQoBjYfiTc0paqqb1F451mHzDw?e=vmRii7\">Learn more</a></p>\n<p><img src=\"https://serv.hnz.li/peter-port/Screenshot_20231108_101413.png\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"Develop a Digital Media Outcome","summary":"This is one of the best pieces of work I have done in Year 11.","date":"Jul 28 2024","draft":false,"tags":["Year 2023","Web Flow"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/Develop a Digital Media Outcome/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n[Learn more](https://huskynz-my.sharepoint.com/:w:/g/personal/peter_husky_nz/EZbs4uc5tRhKvlEcg0QsVQoBjYfiTc0paqqb1F451mHzDw?e=vmRii7)\r\n\r\n![Project Image](https://serv.hnz.li/peter-port/Screenshot_20231108_101413.png)\r\n";
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
//# sourceMappingURL=index_CgB1GyPP.mjs.map
