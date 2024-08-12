;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5ab73975-f35f-4606-90c2-5c79fa3a837d",e._sentryDebugIdIdentifier="sentry-dbid-5ab73975-f35f-4606-90c2-5c79fa3a837d")}catch(e){}}();import '../chunks/page-ssr_CLFW__c6.mjs';
import { a as createComponent } from '../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/"
    }
  });
}, "C:/Users/peter/repos/10/src/pages/go/index.astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/go/index.astro";
const $$url = "/go";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=go.astro.mjs.map
