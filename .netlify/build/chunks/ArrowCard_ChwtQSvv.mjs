;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4ffb6888-15bc-49f6-a860-9897a945c054",e._sentryDebugIdIdentifier="sentry-dbid-4ffb6888-15bc-49f6-a860-9897a945c054")}catch(e){}}();import { ssr, ssrHydrationKey, escape } from 'solid-js/web';
import { f as formatDate } from './PageLayout_DlfqORbU.mjs';
import './_sentry-release-injection-file_DqwrBmxt.mjs';

var _tmpl$ = ["<a", ' href="', '" class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"><div class="w-full group-hover:text-black group-hover:dark:text-white blend"><div class="flex flex-wrap items-center gap-2"><!--$-->', '<!--/--><div class="text-sm uppercase">', '</div></div><div class="font-semibold mt-3 text-black dark:text-white">', '</div><div class="text-sm line-clamp-2">', '</div><ul class="flex flex-wrap mt-2 gap-1">', '</ul></div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"><line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></line><polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></polyline></svg></a>'], _tmpl$2 = ["<div", ' class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">', "</div>"], _tmpl$3 = ["<li", ' class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">', "</li>"];
function ArrowCard({
  entry,
  pill
}) {
  return ssr(_tmpl$, ssrHydrationKey(), `/${escape(entry.collection, true)}/${escape(entry.slug, true)}`, pill && ssr(_tmpl$2, ssrHydrationKey(), entry.collection === "blog" ? "post" : "project"), escape(formatDate(entry.data.date)), escape(entry.data.title), escape(entry.data.summary), escape(entry.data.tags.map((tag) => (
    // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
    ssr(_tmpl$3, ssrHydrationKey(), escape(tag))
  ))));
}

export { ArrowCard as A };
//# sourceMappingURL=ArrowCard_ChwtQSvv.mjs.map
