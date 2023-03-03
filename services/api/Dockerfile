FROM node:lts-alpine

RUN mkdir /app
COPY . /app
WORKDIR /app

# Install the dependenciess
RUN yarn install

EXPOSE 8080