;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="868af873-07fa-47fd-8832-d70a1902b7a0",e._sentryDebugIdIdentifier="sentry-dbid-868af873-07fa-47fd-8832-d70a1902b7a0")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><a href=\"https://spectrum.liamsherwin.tech\">Learn more</a></p>\n<p><img src=\"https://serv.hnz.li/peter-port/Spectrum-website.png\" alt=\"Project Image\"></p>";

				const frontmatter = {"title":"Spectrum's Website","summary":"This is a very fun project to watch grow and I had the fun task of building the Website and running it on Cloudflare. I also help with a lot of backend stuff.","date":"Jul 28 2024","draft":false,"tags":["Astro","JSX","Cloudflare"]};
				const file = "C:/Users/peter/repos/10/src/content/projects/Spectrum's Website/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n[Learn more](https://spectrum.liamsherwin.tech)\r\n\r\n![Project Image](https://serv.hnz.li/peter-port/Spectrum-website.png)\r\n";
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
//# sourceMappingURL=index_Do6HMsog.mjs.map
