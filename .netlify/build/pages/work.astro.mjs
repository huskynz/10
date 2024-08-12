;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="fb47fbdc-8f22-4ec1-b374-228d6a0a47a7",e._sentryDebugIdIdentifier="sentry-dbid-fb47fbdc-8f22-4ec1-b374-228d6a0a47a7")}catch(e){}}();import '../chunks/page-ssr_CLFW__c6.mjs';
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import { g as getCollection, W as WORK } from '../chunks/consts_b1BS8ev-.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DlfqORbU.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../chunks/BottomLayout_BiX0IoEj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const collection = await getCollection("work");
  collection.sort((a, b) => new Date(b.data.dateStart).getTime() - new Date(a.data.dateStart).getTime());
  const work = await Promise.all(
    collection.map(async (item) => {
      const { Content } = await item.render();
      return { ...item, Content };
    })
  );
  function formatWorkDate(input) {
    if (typeof input === "string") return input;
    const month = input.toLocaleDateString("en-US", {
      month: "short"
    });
    const year = new Date(input).getFullYear();
    return `${month} ${year}`;
  }
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": WORK.TITLE, "description": WORK.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${WORK.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <ul> ${work.map((entry) => renderTemplate`<li class="animate border-b border-black/10 dark:border-white/25 mt-4 py-8 first-of-type:mt-0 first-of-type:pt-0 last-of-type:border-none"> <div class="text-sm uppercase mb-4"> ${formatWorkDate(entry.data.dateStart)} - ${formatWorkDate(entry.data.dateEnd)} </div> <div class="text-black dark:text-white font-semibold"> ${entry.data.company} </div> <div class="text-sm font-semibold"> ${entry.data.role} </div> <article class="prose dark:prose-invert"> ${renderComponent($$result3, "entry.Content", entry.Content, {})} </article> </li>`)} </ul> ` })} ` })}`;
}, "C:/Users/peter/repos/10/src/pages/work/index.astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=work.astro.mjs.map
