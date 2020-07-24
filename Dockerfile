FROM node:12.18.2
LABEL maintainer "Flavio Brusamolin"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY src ./src

CMD [ "npm", "run", "dev" ]
