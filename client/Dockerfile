FROM node:alpine

RUN mkdir -p /srv/app/tokopilsatdb-client
WORKDIR /srv/app/tokopilsatdb-client

COPY package.json /srv/app/tokopilsatdb-client/
COPY yarn.lock /srv/app/tokopilsatdb-client/

RUN npm -g install yarn
RUN yarn install

COPY . /srv/app/tokopilsatdb-client

EXPOSE 3002
CMD [ "yarn", "start" ]
