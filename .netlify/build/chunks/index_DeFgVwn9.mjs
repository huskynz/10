;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ee8052ad-10cb-4825-980f-eb2ec76f0ad4",e._sentryDebugIdIdentifier="sentry-dbid-ee8052ad-10cb-4825-980f-eb2ec76f0ad4")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><a href=\"https://inde.nz\">Learn more</a></p>\n<p><img src=\"https://serv.hnz.li/peter-port/200813-0073.webp\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"Work Experience at Inde","summary":"I did 5 weeks of work experience with Inde, every week I was with a different team learning all aspects of the business.","date":"Jul 28 2024","draft":false,"tags":["Year 2023","Azure","Microsoft"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/Work Experience at Inde/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n[Learn more](https://inde.nz)\r\n\r\n![Project Image](https://serv.hnz.li/peter-port/200813-0073.webp)\r\n";
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
//# sourceMappingURL=index_DeFgVwn9.mjs.map
