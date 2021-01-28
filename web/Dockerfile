FROM node:14.15.4-alpine3.11

RUN apk add --no-cache bash

RUN chmod +x .docker/entrypoint.sh

USER node

WORKDIR /home/node/app