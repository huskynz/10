;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="00345baf-fa1c-4cd0-8a78-cbfa6584d8dc",e._sentryDebugIdIdentifier="sentry-dbid-00345baf-fa1c-4cd0-8a78-cbfa6584d8dc")}catch(e){}}();import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_CT2QE1c8.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { a as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import './_sentry-release-injection-file_DqwrBmxt.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.husky.nz", "SSR": true}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/coming-soon/index.md": () => import('./index_CRpz3jY4.mjs'),"/src/content/legal/privacy.md": () => import('./privacy_BfnY6pB5.mjs'),"/src/content/legal/terms.md": () => import('./terms_DG0cPJyJ.mjs'),"/src/content/projects/Develop a Digital Media Outcome/index.md": () => import('./index_T9Kh873q.mjs'),"/src/content/projects/HuskyNZ Weather/index.md": () => import('./index_CNrnTF5j.mjs'),"/src/content/projects/HuskyNZ's Gen6 Website/index.md": () => import('./index_CxJ16T2A.mjs'),"/src/content/projects/Rolleston College Film Club/index.md": () => import('./index_DFnR31z6.mjs'),"/src/content/projects/Spectrum's Website/index.md": () => import('./index_tJfVYbR6.mjs'),"/src/content/projects/Work Experience at Inde/index.md": () => import('./index_sthmEuHu.mjs'),"/src/content/projects/Yoobee Cyber Security Micro-credential/index.md": () => import('./index_yiCP-lfE.mjs'),"/src/content/work/index.md": () => import('./index_2eXHUhix.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"legal":{"type":"content","entries":{"privacy":"/src/content/legal/privacy.md","terms":"/src/content/legal/terms.md"}},"work":{"type":"content","entries":{"index":"/src/content/work/index.md"}},"blog":{"type":"content","entries":{"coming-soon":"/src/content/blog/coming-soon/index.md"}},"projects":{"type":"content","entries":{"develop-a-digital-media-outcome":"/src/content/projects/Develop a Digital Media Outcome/index.md","huskynz-weather":"/src/content/projects/HuskyNZ Weather/index.md","huskynzs-gen6-website":"/src/content/projects/HuskyNZ's Gen6 Website/index.md","spectrums-website":"/src/content/projects/Spectrum's Website/index.md","rolleston-college-film-club":"/src/content/projects/Rolleston College Film Club/index.md","work-experience-at-inde":"/src/content/projects/Work Experience at Inde/index.md","yoobee-cyber-security-micro-credential":"/src/content/projects/Yoobee Cyber Security Micro-credential/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/coming-soon/index.md": () => import('./index_C6PlbtE0.mjs'),"/src/content/legal/privacy.md": () => import('./privacy_Drzyt81c.mjs'),"/src/content/legal/terms.md": () => import('./terms_Dw-g73um.mjs'),"/src/content/projects/Develop a Digital Media Outcome/index.md": () => import('./index_B9yZPCB1.mjs'),"/src/content/projects/HuskyNZ Weather/index.md": () => import('./index_agAhP2Jp.mjs'),"/src/content/projects/HuskyNZ's Gen6 Website/index.md": () => import('./index_D8nXL1cg.mjs'),"/src/content/projects/Rolleston College Film Club/index.md": () => import('./index_UyLUedKN.mjs'),"/src/content/projects/Spectrum's Website/index.md": () => import('./index_CJPNnjUE.mjs'),"/src/content/projects/Work Experience at Inde/index.md": () => import('./index_CzitjZ4q.mjs'),"/src/content/projects/Yoobee Cyber Security Micro-credential/index.md": () => import('./index_a4dwV3Sm.mjs'),"/src/content/work/index.md": () => import('./index_C21nDsO0.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const SITE = {
  TITLE: "HuskyNZ | Peter",
  DESCRIPTION: "Who am I?.",
  AUTHOR: "Peter Gallwas"
};
const WORK = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked."
};
const BLOG = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about."
};
const PROJECTS = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on."
};
const SEARCH = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword."
};
const LINKS = [
  {
    TEXT: "Home",
    HREF: "/"
  },
  {
    TEXT: "Blog",
    HREF: "/blog"
  },
  {
    TEXT: "Projects",
    HREF: "/projects"
  }
];
const SOCIALS = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "peter@husky.nz",
    HREF: "mailto:peter@husky.nz"
  },
  {
    NAME: "Main Github",
    ICON: "github",
    TEXT: "HuskyNZ",
    HREF: "https://github.com/HuskyNZ"
  },
  {
    NAME: "Github Personal",
    ICON: "github",
    TEXT: "Husky-Devel",
    HREF: "https://github.com/husky-devel"
  },
  {
    NAME: "Linkedin",
    ICON: "linkedin",
    TEXT: "Peter Gallwas",
    HREF: "https://www.linkedin.com/in/peter-gallwas/"
  }
];

export { BLOG as B, LINKS as L, PROJECTS as P, SITE as S, WORK as W, SEARCH as a, SOCIALS as b, getCollection as g };
//# sourceMappingURL=consts_b1BS8ev-.mjs.map
