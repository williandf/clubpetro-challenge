# Imagem de Origem
FROM node:14.15.4-alpine3.11
# Set the working directory to /api
RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@7.4.1

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

CMD [ "npm", "run", "start:dev" ]