;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dd68b242-3dd7-4d6c-9e83-21dd368f979e",e._sentryDebugIdIdentifier="sentry-dbid-dd68b242-3dd7-4d6c-9e83-21dd368f979e")}catch(e){}}();import '../../chunks/page-ssr_CLFW__c6.mjs';
import { c as createAstro, a as createComponent } from '../../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';
import '../../chunks/_sentry-release-injection-file_DqwrBmxt.mjs';
export { renderers } from '../../renderers.mjs';

const predefinedUrls = {
  logo: "https://serv.husky.nz/logo/default.png",
  github: "https://github.com/huskynz/",
  panel: "https://panel.hnz.li",
  twitch: "https://www.twitch.tv/huskynzofficial",
  youtube: "https://www.youtube.com/@huskynz",
  ghm: "https://github.com/huskynz/10"
};

const $$Astro = createAstro("https://www.husky.nz");
const $$location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$location;
  const { location } = Astro2.params;
  const redirectUrl = location === "go" ? "/" : predefinedUrls[location] || "/";
  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl
    }
  });
}, "C:/Users/peter/repos/10/src/pages/go/[location].astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/go/[location].astro";
const $$url = "/go/[location]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$location,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_location_.astro.mjs.map
