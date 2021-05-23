FROM node:14

ARG APP_ROOT=/rss-node

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

COPY package.json ./
RUN apt update -y && apt install postgresql postgresql-contrib -y
RUN npm install

EXPOSE 3000
