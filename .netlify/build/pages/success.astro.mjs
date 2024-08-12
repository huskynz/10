;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="835c3f21-51d5-45da-8056-8d45253df149",e._sentryDebugIdIdentifier="sentry-dbid-835c3f21-51d5-45da-8056-8d45253df149")}catch(e){}}();import '../chunks/page-ssr_CLFW__c6.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, e as renderHead } from '../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.husky.nz");
const $$Success = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Email with Astro + Resend</title>${renderHead()}</head> <body> <h1>Email with Astro + Resend</h1> <p>Email sent successfully.</p> <p><a href="/">Go home</a></p> </body></html>`;
}, "C:/Users/peter/repos/10/src/pages/success.astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=success.astro.mjs.map
