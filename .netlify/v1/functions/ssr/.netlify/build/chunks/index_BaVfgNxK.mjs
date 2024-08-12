;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d95de88c-9c53-4c60-bb26-1bfcd33d3575",e._sentryDebugIdIdentifier="sentry-dbid-d95de88c-9c53-4c60-bb26-1bfcd33d3575")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"https://serv.hnz.li/peter-port/yoobe.png\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"Yoobee Cyber Security Micro-credential","summary":"I learnt a lot from this course.","date":"Jul 28 2024","draft":false,"tags":["Year 2023","Basic compute","Kali Linux"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/Yoobee Cyber Security Micro-credential/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Project Image](https://serv.hnz.li/peter-port/yoobe.png)\r\n";
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
//# sourceMappingURL=index_BaVfgNxK.mjs.map
