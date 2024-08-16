import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sentry from "@sentry/astro";
import netlify from "@astrojs/netlify";


// https://astro.build/config
export default defineConfig({
  site: "https://www.husky.nz",
  output: "server",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  }), sentry({
    dsn: "https://4859ca7cbd7b4c1a9acb12755d7a4b21@o1267611.ingest.us.sentry.io/6454168",
    sourceMapsUploadOptions: {
      project: "javascript",
      authToken: process.env.SENTRY_AUTH_TOKEN
    },
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost", /^https:\/www\/.husky.nz\/.nz\/api/],
    profilesSampleRate: 1.0
  })],
  adapter: netlify(),
});