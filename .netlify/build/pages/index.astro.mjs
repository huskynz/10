;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9cd21032-3d67-4de4-b156-1ce386de6042",e._sentryDebugIdIdentifier="sentry-dbid-9cd21032-3d67-4de4-b156-1ce386de6042")}catch(e){}}();import '../chunks/page-ssr_CLFW__c6.mjs';
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_C9EmC2cU.mjs';
import 'kleur/colors';
import { g as getCollection, b as SOCIALS, S as SITE } from '../chunks/consts_b1BS8ev-.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DlfqORbU.mjs';
import { A as ArrowCard } from '../chunks/ArrowCard_ChwtQSvv.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$TwinklingStars = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<svg id="twinkle-star" class="template" width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full animate-twinkle"> <circle cx="74" cy="74" r="11" fill="white"></circle> <rect y="141.421" width="200" height="10" transform="rotate(-45 0 141.421)" fill="url(#paint0_linear_4_2)"></rect> <rect x="7.07107" width="200" height="10" transform="rotate(45 7.07107 0)" fill="url(#paint1_linear_4_2)"></rect> <defs> <linearGradient id="paint0_linear_4_2" x1="0" y1="146.421" x2="200" y2="146.421" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.445" stop-color="white"></stop> <stop offset="0.58721" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> <linearGradient id="paint1_linear_4_2" x1="7.07107" y1="5" x2="207.071" y2="5" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.42" stop-color="white"></stop> <stop offset="0.555" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> </defs> </svg> <script>\n  // Generate a twinkle star and append it to the galaxy, remove it after animation.\n  function generateTwinkleStar() {\n    const twinkleStarTemplate = document.getElementById("twinkle-star")\n    if (!twinkleStarTemplate) { return; }\n    // Clone the twinkle star template and set its attributes.\n    const twinkleStar = twinkleStarTemplate.cloneNode(true);\n    twinkleStar.style.position = "absolute";\n    twinkleStar.style.left = Math.floor(Math.random() * window.innerWidth) + "px";\n    twinkleStar.style.top = Math.floor(Math.random() * (window.innerHeight/3)) + "px";\n    twinkleStar.style.width = window.innerWidth < 768 ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";\n    twinkleStar.style.height = twinkleStar.style.width;\n    twinkleStar.classList.add("twinkle");\n    document.getElementById("galaxy").appendChild(twinkleStar);\n\n    // Remove the twinkle star after the animation is completed.\n    setTimeout(() => {\n      twinkleStar.remove();\n    }, 2500);\n  }\n\n  setInterval(generateTwinkleStar, 5000);\n<\/script>'])), maybeRenderHead());
}, "C:/Users/peter/repos/10/src/components/TwinklingStars.astro", void 0);

const $$MeteorShower = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="meteors"> <!-- rotations defined in base.css & tailwind.config.mjs --> <div class="shower ur"></div> <div class="shower dr"></div> <div class="shower dl"></div> <div class="shower ul"></div> </div> `;
}, "C:/Users/peter/repos/10/src/components/MeteorShower.astro", void 0);

const $$Quoutes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="quoutes" class="text-center h-screen flex" data-astro-cid-u4za2kyi> <div class="py-8 px-4 m-auto max-w-screen-xl text-center lg:py-16 z-10 relative" data-astro-cid-u4za2kyi> <h2 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white" data-astro-cid-u4za2kyi>
What people have to say about me?
</h2> <p id="titleText" class="mb-4 subheading font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white inline-block transition-all glow" data-astro-cid-u4za2kyi></p> <p id="cursor" class="mb-4 subheading font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white inline-block flash" data-astro-cid-u4za2kyi>
|
</p> <p id="subHeading" class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 invisible" data-astro-cid-u4za2kyi></p> </div> </div> `;
}, "C:/Users/peter/repos/10/src/components/quoutes.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => !post.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
  (await getCollection("projects")).filter((project) => !project.data.draft).sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Home", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="absolute inset-0 block dark:hidden"> <div id="particles1" class="fixed inset-0"></div> <div id="particles2" class="fixed inset-0"></div> <div id="particles3" class="fixed inset-0"></div> </div>  <div class="absolute inset-0 bg-black hidden dark:block"> <div id="stars1" class="fixed inset-0"></div> <div id="stars2" class="fixed inset-0"></div> <div id="stars3" class="fixed inset-0"></div> </div>  <div id="galaxy" class="fixed inset-0"> <div class="hidden dark:block"> ', " ", ` </div> </div> <script src="/js/bg.js"><\/script>  <section class="relative h-screen w-full"> <div id="planetcont" class="animate absolute inset-0 top-1/4 overflow-hidden"> <div id="crescent" class="absolute top-0 left-1/2 -translate-x-1/2 w-[250vw] min-h-[100vh] aspect-square rounded-full p-[1px] bg-gradient-to-b from-black/25 dark:from-white/75 from-0% to-transparent to-5%"> <div id="planet" class="w-full h-full bg-white dark:bg-black rounded-full p-[1px] overflow-hidden flex justify-center"> <div id="blur" class="w-full h-20 rounded-full bg-neutral-900/25 dark:bg-white/25 blur-3xl"></div> </div> </div> </div> <div class="animate absolute h-full w-full flex items-center justify-center"> <div class="relative w-full h-full flex items-center justify-center"> <div class="p-5 text-center"> <p class="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">
Hi!
</p> <p class="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">
I'm Peter
</p> <p class="animated text-sm md:text-base lg:text-lg opacity-75">
A Solutions Architect
</p> <div id="ctaButtons" class="animated flex flex-wrap gap-4 justify-center mt-5"> <a href="/blog" class="py-2 px-4 rounded truncate text-xs text-center md:text-sm lg:text-base bg-black dark:bg-white text-white dark:text-black hover:opacity-75 blend">
Read my blog
</a> <a href="/projects" class="py-2 px-4 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend">
View my projects
</a> </div> </div> </div> </div> </section> <div class="relative bg-white dark:bg-black"> <div class="mx-auto max-w-screen-sm p-5 space-y-24 pb-16"> <!-- About Section --> <section class="animate"> <article> <img src="https://serv.hnz.li/public/peter.png" width="180" height="180" alt="ME" class=""> <p>Hi, I'm Peter, currently a university student with a passion for tech. I have been learning for the last three years (coming up on four). I have gained a lot of skills, but my primary expertise is with Microsoft and Cloudflare products. However, I also know how to work with AWS, GCP, DataDog, and Linux servers, and I'm still learning and expanding my skill set. I have earned two Microsoft certifications: AZ-904 and MS-900, both of which are fundamental. Additionally, I have been learning web technology along the way (though I'm not a designer). I also stream on Twitch for fun.</p> </article> </section> <!-- Blog Preview Section --> <section class="animate"> <div class="space-y-4"> <div class="flex justify-between"> <p class="font-semibold text-black dark:text-white">
Recent posts
</p> <a href="/blog" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend">
All posts
</span> </a> </div> <ul class="space-y-4"> `, " </ul> </div> </section> ", ` <!-- <Contact/> --> <!-- Contact Section --> <section class="animate"> <div> <p class="font-semibold text-black dark:text-white">
Let's Connect
</p> <p>
Reach out to me via email or on social media.
</p> <!-- <Contact /> --> <div class="grid grid-cols-4 gap-y-2 mt-4 auto-cols-min"> `, " </div> </div></section> </div> </div> "])), maybeRenderHead(), renderComponent($$result2, "TwinklingStars", $$TwinklingStars, {}), renderComponent($$result2, "MeteorShower", $$MeteorShower, {}), posts.map((post) => renderTemplate`<li> ${renderComponent($$result2, "ArrowCard", ArrowCard, { "entry": post })} </li>`), renderComponent($$result2, "Quoutes", $$Quoutes, {}), SOCIALS.map((social) => renderTemplate`<div class="col-span-1 flex items-center gap-1"> <span class="whitespace-nowrap truncate"> ${social.NAME} </span> </div>
              <div class="col-span-3 truncate"> <a${addAttribute(social.HREF, "href")} target="_blank" class="w-fit col-span-3 group flex gap-1 items-center underline decoration-[.5px] decoration-black/25 dark:decoration-white/50 hover:decoration-black dark:hover:decoration-white text-black dark:text-white underline-offset-2 blend"> <span class="text-black/75 dark:text-white/75 group-hover:text-black group-hover:dark:text-white blend"> ${social.TEXT} </span> </a> </div>`)) })}`;
}, "C:/Users/peter/repos/10/src/pages/index.astro", void 0);

const $$file = "C:/Users/peter/repos/10/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map
