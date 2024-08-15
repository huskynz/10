FROM node:lts AS base
WORKDIR /

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY yarn.lock package.json ./

FROM base AS prod-deps
RUN yarn install --omit=dev

FROM base AS build-deps
RUN yarn install

FROM build-deps AS build
COPY . .
RUN yarn run build
RUN ls -la /dist/server

FROM base AS runtime
COPY --from=prod-deps /node_modules ./node_modules
COPY --from=build /dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs