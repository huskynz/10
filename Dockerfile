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
RUN yarn install

# Build the app
COPY . .
RUN mv astro.config.mjs.docker astro.config.mjs && \
    yarn build

# Runtime stage
FROM node:20.11-slim AS runtime
WORKDIR /app
ENV HOST=0.0.0.0 \
    PORT=4321 \
    NODE_ENV=production

# Copy build artifacts and dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]