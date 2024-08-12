;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3fe4c077-ad29-49c9-968e-c10e36613eee",e._sentryDebugIdIdentifier="sentry-dbid-3fe4c077-ad29-49c9-968e-c10e36613eee")}catch(e){}}();import '../../chunks/page-ssr_CLFW__c6.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/consts_b1BS8ev-.mjs';
import { $ as $$PageLayout } from '../../chunks/PageLayout_DlfqORbU.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../../chunks/BottomLayout_BiX0IoEj.mjs';
import { $ as $$ArticleTopLayout, a as $$ArticleBottomLayout } from '../../chunks/ArticleBottomLayout_CTPnSs-L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.husky.nz");
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: project
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const project = Astro2.props;
  const { title, summary } = project.data;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": summary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "ArticleTopLayout", $$ArticleTopLayout, { "entry": project })} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "ArticleBottomLayout", $$ArticleBottomLayout, { "entry": project })} </div> ` })} ` })}`;
}, "C:/Users/peter/repos/10/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

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
