# Step 1: Build the Vue 3 App
FROM node:22 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with Caddy
FROM caddy:2.6.4-alpine

# Copy built Vue app to Caddy's web root
COPY --from=build /app/dist /usr/share/caddy/html

# Copy Caddyfile (configuration)
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80 for HTTP
EXPOSE 80

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
