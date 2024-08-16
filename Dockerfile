dockerfile
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

# Accept the SENTRY_AUTH_TOKEN as a build argument
ARG SENTRY_AUTH_TOKEN

# Login to Sentry using the provided auth token
RUN yarn add @sentry/cli
RUN ./node_modules/.bin/sentry-cli login --auth-token $SENTRY_AUTH_TOKEN

RUN yarn run build
RUN ls -la /dist/server

FROM base AS runtime
COPY --from=prod-deps /node_modules ./node_modules
COPY --from=build /dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs