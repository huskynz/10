import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import netlify from "@astrojs/netlify";
import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.husky.nz",
  output: "server",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  }), sentry(),],
  adapter: netlify()
});