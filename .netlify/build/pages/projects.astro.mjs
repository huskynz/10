;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="29fcb577-2552-463c-8b74-b07b99da709c",e._sentryDebugIdIdentifier="sentry-dbid-29fcb577-2552-463c-8b74-b07b99da709c")}catch(e){}}();import '../chunks/page-ssr_CLFW__c6.mjs';
import { a as createComponent$1, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import { g as getCollection, P as PROJECTS } from '../chunks/consts_b1BS8ev-.mjs';
import { c as cn, $ as $$PageLayout } from '../chunks/PageLayout_DlfqORbU.mjs';
import { $ as $$TopLayout, a as $$BottomLayout } from '../chunks/BottomLayout_BiX0IoEj.mjs';
import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'solid-js/web';
import { createSignal, createEffect, For } from 'solid-js';
import { A as ArrowCard } from '../chunks/ArrowCard_ChwtQSvv.mjs';
import '../chunks/_sentry-release-injection-file_DqwrBmxt.mjs';
export { renderers } from '../renderers.mjs';

var _tmpl$ = ["<div", ' class="grid grid-cols-1 sm:grid-cols-3 gap-6"><div class="col-span-3 sm:col-span-1"><div class="sticky top-24"><div class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">Filter</div><ul class="flex flex-wrap sm:flex-col gap-1.5">', '</ul></div></div><div class="col-span-3 sm:col-span-2"><div class="flex flex-col"><div class="text-sm uppercase mb-2">SHOWING <!--$-->', "<!--/--> OF <!--$-->", '<!--/--> PROJECTS</div><ul class="flex flex-col gap-3">', "</ul></div></div></div>"], _tmpl$2 = ["<li", "><button", "><svg", '><use href="', '"', '></use><use href="', '"', "></use></svg><!--$-->", "<!--/--></button></li>"], _tmpl$3 = ["<li", ">", "</li>"];
function Projects({
  data,
  tags
}) {
  const [filter, setFilter] = createSignal(/* @__PURE__ */ new Set());
  const [projects, setProjects] = createSignal([]);
  createEffect(() => {
    setProjects(data.filter((entry) => Array.from(filter()).every((value) => entry.data.tags.some((tag) => tag.toLowerCase() === String(value).toLowerCase()))));
  });
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(For, {
    each: tags,
    children: (tag) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("class", escape(cn("w-full px-2 py-1 rounded", "whitespace-nowrap overflow-hidden overflow-ellipsis", "flex gap-2 items-center", "bg-black/5 dark:bg-white/10", "hover:bg-black/10 hover:dark:bg-white/15", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white"), true), false), ssrAttribute("class", escape(cn("size-5 fill-black/50 dark:fill-white/50", "transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white"), true), false), `/ui.svg#square`, ssrAttribute("class", escape(cn(!filter().has(tag) ? "block" : "hidden"), true), false), `/ui.svg#square-check`, ssrAttribute("class", escape(cn(filter().has(tag) ? "block" : "hidden"), true), false), escape(tag))
  })), escape(projects().length), escape(data.length), escape(projects().map((project) => ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(ArrowCard, {
    entry: project
  }))))));
}

const $$Index = createComponent$1(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const tags = [...new Set(projects.flatMap((project) => project.data.tags))].sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": PROJECTS.TITLE, "description": PROJECTS.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TopLayout", $$TopLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate page-heading"> ${PROJECTS.TITLE} </div> ` })} ${renderComponent($$result2, "BottomLayout", $$BottomLayout, {}, { "default": ($$result3) => renderTemplate` <div class="animate"> ${renderComponent($$result3, "Projects", Projects, { "client:load": true, "tags": tags, "data": projects, "client:component-hydration": "load", "client:component-path": "@components/Projects", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "C:/Users/peter/repos/10/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=projects.astro.mjs.map
