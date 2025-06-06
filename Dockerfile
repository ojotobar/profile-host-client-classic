# ---------- Build Stage ----------
FROM node:22-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Copy built Angular app
COPY --from=builder /app/dist/portfolio-classic/browser /usr/share/nginx/html

# Copy entrypoint script (to inject env vars at runtime)
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Optional: custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ENTRYPOINT must run your script AND nginx
ENTRYPOINT ["/entrypoint.sh"]