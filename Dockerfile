FROM node:lts-bookworm AS base
WORKDIR /
ENV PUPPETEER_SKIP_DOWNLOAD=TRUE

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY yarn.lock package.json ./

FROM base AS build-deps
RUN yarn install

FROM build-deps AS build
COPY . .
# Rename astro.config.mjs.docker to astro.config.mjs
RUN mv astro.config.mjs.docker astro.config.mjs

RUN yarn run build
RUN ls -la /dist/server

FROM base AS runtime
COPY --from=build-deps /node_modules ./node_modules
COPY --from=build /dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs