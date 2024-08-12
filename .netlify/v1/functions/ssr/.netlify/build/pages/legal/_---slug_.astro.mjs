;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3d3ea77c-e53b-453c-ac8d-28b4a280bf80",e._sentryDebugIdIdentifier="sentry-dbid-3d3ea77c-e53b-453c-ac8d-28b4a280bf80")}catch(e){}}();import '../../chunks/page-ssr_CLFW__c6.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import { g as getCollection, S as SITE } from '../../chunks/consts_b1BS8ev-.mjs';
import { f as formatDate, $ as $$PageLayout } from '../../chunks/PageLayout_DlfqORbU.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../../chunks/BottomLayout_BiX0IoEj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.husky.nz");
async function getStaticPaths() {
  const docs = await getCollection("legal");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const doc = Astro2.props;
  const { title, date } = doc.data;
  const { Content } = await doc.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": `${title} for ${SITE.TITLE}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> <div class="page-heading"> ${title} </div> <p class="font-normal opacity-75">
Last updated: ${formatDate(date)} </p> </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <article class="animate"> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "C:/Users/peter/repos/10/src/pages/legal/[...slug].astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/legal/[...slug].astro";
const $$url = "/legal/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=_---slug_.astro.mjs.map
