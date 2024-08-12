;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="feb12008-3a1e-4001-adf0-02c8d1839fa8",e._sentryDebugIdIdentifier="sentry-dbid-feb12008-3a1e-4001-adf0-02c8d1839fa8")}catch(e){}}();import rss from '@astrojs/rss';
import { g as getCollection, S as SITE } from '../chunks/consts_b1BS8ev-.mjs';
import '../chunks/_sentry-release-injection-file_DqwrBmxt.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("blog");
  const projects = await getCollection("projects");
  const items = [...posts, ...projects];
  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith("blog") ? `/blog/${item.slug}/` : `/projects/${item.slug}/`
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=rss.xml.astro.mjs.map
