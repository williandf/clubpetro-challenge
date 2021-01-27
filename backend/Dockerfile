# Imagem de Origem
FROM node:14-alpine
# Set the working directory to /api
WORKDIR /backend
# copy package.json into the container at /api
COPY package*.json /backend/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /api
COPY . /backend/
# Build the application
RUN npm run build
# Make port 80 available to the world outside this container
EXPOSE 80
# Run the web service on container startup.
CMD [ "npm", "run", "start:prod" ]