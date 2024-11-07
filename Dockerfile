# Build stage
FROM node:20.11-slim AS builder
WORKDIR /app
ENV PUPPETEER_SKIP_DOWNLOAD=TRUE
# Install any needed system dependencies for the build
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the app
COPY . .
RUN mv astro.config.mjs.docker astro.config.mjs && \
    yarn build

# Runtime stage - using Node since it's a SSR Astro app
FROM node:20.11-slim AS runtime
WORKDIR /app
ENV HOST=0.0.0.0 \
    PORT=4321 \
    NODE_ENV=production

# Copy only what's needed to run the app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Install only production dependencies
RUN yarn install --frozen-lockfile --production=true && \
    # Create non-root user
    addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs && \
    # Clean up
    yarn cache clean && \
    chown -R nodejs:nodejs /app

USER nodejs
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]