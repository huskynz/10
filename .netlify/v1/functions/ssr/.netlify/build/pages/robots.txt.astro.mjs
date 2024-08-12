;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="6e97e89c-0c1a-47df-84a2-1381b9708d1c",e._sentryDebugIdIdentifier="sentry-dbid-6e97e89c-0c1a-47df-84a2-1381b9708d1c")}catch(e){}}();import '../chunks/_sentry-release-injection-file_DqwrBmxt.mjs';
export { renderers } from '../renderers.mjs';

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", "https://www.husky.nz").href}
`.trim();
const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=robots.txt.astro.mjs.map
