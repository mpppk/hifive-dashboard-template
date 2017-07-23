FROM node:latest
MAINTAINER mpppk

RUN mkdir /tmp/work
WORKDIR /tmp/work
COPY package.json /tmp/work
RUN npm install
COPY . /tmp/work
RUN npm run lint
RUN npm test
EXPOSE 8080
CMD npm start
