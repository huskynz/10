;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f0320f7f-d79d-45c2-9645-e43087fa4e49",e._sentryDebugIdIdentifier="sentry-dbid-f0320f7f-d79d-45c2-9645-e43087fa4e49")}catch(e){}}();import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, f as renderSlot } from './astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import { a as $$Container } from './PageLayout_DlfqORbU.mjs';

const $$TopLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-36 pb-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/peter/repos/10/src/layouts/TopLayout.astro", void 0);

const $$BottomLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 py-5"> ${renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>`;
}, "C:/Users/peter/repos/10/src/layouts/BottomLayout.astro", void 0);

export { $$TopLayout as $, $$BottomLayout as a };
//# sourceMappingURL=BottomLayout_BiX0IoEj.mjs.map
