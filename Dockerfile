### STAGE 1 : BUILD ###
FROM node:16.17-alpine AS build
WORKDIR /src/app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

### STAGE 2 : RUN ### 
FROM nginx:1.21-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/app/dist/app /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
