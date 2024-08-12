;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fdf05138-47cb-42ba-8756-cb99640a272a",e._sentryDebugIdIdentifier="sentry-dbid-fdf05138-47cb-42ba-8756-cb99640a272a")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><a href=\"https://landing.husky.nz\">Learn more</a></p>\n<p><img src=\"https://serv.serv.hnz.li/peter-port/Screenshot_20231020_153931.png\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"HuskyNZ Weather","summary":"For a school assignment, I made a small weather app that uses Flask and OpenWeather to be slim and lean. I'm looking to do a complete rewrite soon.","date":"Jul 28 2024","draft":false,"tags":["Year 2023","Flask","Python","Azure"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/HuskyNZ Weather/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n[Learn more](https://landing.husky.nz)\r\n\r\n![Project Image](https://serv.serv.hnz.li/peter-port/Screenshot_20231020_153931.png)\r\n";
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
//# sourceMappingURL=index_DQAzgHuB.mjs.map
