FROM node:alpine

RUN mkdir -p /srv/app/tokopilsatdb-server
WORKDIR /srv/app/tokopilsatdb-server

COPY package.json /srv/app/tokopilsatdb-server/
COPY yarn.lock /srv/app/tokopilsatdb-server/

RUN npm -g install yarn
RUN yarn global add nodemon
RUN yarn install

COPY . /srv/app/tokopilsatdb-server

EXPOSE 8080
CMD [ "yarn", "start" ]
