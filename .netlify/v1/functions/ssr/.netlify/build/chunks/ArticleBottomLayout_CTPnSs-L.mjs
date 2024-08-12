;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="574916ef-9017-4560-9138-aa80f7bced46",e._sentryDebugIdIdentifier="sentry-dbid-574916ef-9017-4560-9138-aa80f7bced46")}catch(e){}}();import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate, r as readingTime } from './PageLayout_DlfqORbU.mjs';
import { g as getCollection } from './consts_b1BS8ev-.mjs';

const $$Astro$1 = createAstro("https://www.husky.nz");
const $$ArticleTopLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleTopLayout;
  const { entry } = Astro2.props;
  const { collection, data, body } = entry;
  const { title, summary, date } = data;
  const demoUrl = collection === "projects" ? data.demoUrl : null;
  const repoUrl = collection === "projects" ? data.repoUrl : null;
  return renderTemplate`${maybeRenderHead()}<div> <a${addAttribute(`/${collection}`, "href")} class="group w-fit p-1.5 gap-1.5 text-sm flex items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Back to ${collection} </div> </a> <div class="flex flex-wrap text-sm uppercase mt-12 gap-3 opacity-75"> <div class="flex items-center gap-2"> <svg class="size-5 stroke-current"> <use href="/ui.svg#calendar"></use> </svg> ${formatDate(date)} </div> <div class="flex items-center gap-2"> <svg class="size-5 stroke-current"> <use href="/ui.svg#book-open"></use> </svg> ${readingTime(body)} </div> </div> <h1 class="text-3xl font-semibold text-black dark:text-white mt-2"> ${title} </h1> <div class="mt-1"> ${summary} </div> ${(demoUrl || repoUrl) && renderTemplate`<div class="mt-4 flex flex-wrap gap-2"> ${demoUrl && renderTemplate`<a${addAttribute(demoUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <svg class="size-4"> <use href="/ui.svg#globe" class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"></use> </svg> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
See Demo
</span> </a>`} ${repoUrl && renderTemplate`<a${addAttribute(repoUrl, "href")} target="_blank" class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"> <svg class="size-4"> <use href="/ui.svg#link" class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"></use> </svg> <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
See Repository
</span> </a>`} </div>`} </div>`;
}, "C:/Users/peter/repos/10/src/layouts/ArticleTopLayout.astro", void 0);

const $$Astro = createAstro("https://www.husky.nz");
const $$ArticleBottomLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleBottomLayout;
  const { entry } = Astro2.props;
  const { collection } = entry;
  const { Content } = await entry.render();
  const items = (await getCollection(collection)).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const index = items.findIndex((x) => x.slug === entry.slug);
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];
  return renderTemplate`${maybeRenderHead()}<div> <article> ${renderComponent($$result, "Content", Content, {})} </article> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <a${addAttribute(`/${prev.collection}/${prev.slug}`, "href")} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 blend"> <div class="order-2 w-full h-full group-hover:text-black group-hover:dark:text-white blend"> <div class="flex flex-wrap gap-2"> <div class="text-sm uppercase">
Prev
</div> </div> <div class="font-semibold mt-3 text-black dark:text-white"> ${prev.data.title} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="order-1 stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-180"> <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline> </svg> </a> <a${addAttribute(`/${next.collection}/${next.slug}`, "href")} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <div class="w-full h-full text-right group-hover:text-black group-hover:dark:text-white blend"> <div class="text-sm uppercase">
Next
</div> <div class="font-semibold mt-3 text-black dark:text-white"> ${next.data.title} </div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"> <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line> <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline> </svg> </a> </div> </div>`;
}, "C:/Users/peter/repos/10/src/layouts/ArticleBottomLayout.astro", void 0);

export { $$ArticleTopLayout as $, $$ArticleBottomLayout as a };
//# sourceMappingURL=ArticleBottomLayout_CTPnSs-L.mjs.map
