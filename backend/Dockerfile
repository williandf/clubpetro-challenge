# Imagem de Origem
FROM node:14-alpine
# Set the working directory to /api
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
# copy package.json into the container at /api
COPY package*.json ./
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . .
COPY --chown=node:node . .
USER node
# Make port 80 available to the world outside this container
EXPOSE 8080
# Run the web service on container startup.
CMD [ "npm", "run", "start:dev" ]