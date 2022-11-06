FROM node:alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production

COPY . .

CMD ["npm", "run", "build"]

FROM nginx:alpine AS prod-stage

COPY --from=build /app/dist/ /usr/share/nginx/html/
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]