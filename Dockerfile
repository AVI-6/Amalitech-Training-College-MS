FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS distroless-deps

WORKDIR /app

RUN echo '{"private":true}' > package.json \
  && npm install --omit=dev serve@14.2.4

FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM gcr.io/distroless/nodejs22-debian12 AS runner-distroless

WORKDIR /app

COPY --from=distroless-deps /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist

EXPOSE 8080

CMD ["node_modules/serve/build/main.js", "-s", "dist", "-l", "8080"]
