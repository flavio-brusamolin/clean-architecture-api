FROM node:12.18.2
LABEL maintainer "Flavio Brusamolin"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=production
RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
