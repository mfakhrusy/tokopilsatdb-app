FROM node:alpine

RUN mkdir -p /srv/app/tokopilsatdb-admin
WORKDIR /srv/app/tokopilsatdb-admin

COPY package.json /srv/app/tokopilsatdb-admin/
COPY tsconfig.json /srv/app/tokopilsatdb-admin/
COPY yarn.lock /srv/app/tokopilsatdb-admin/

RUN npm -g install yarn
RUN yarn install

COPY . /srv/app/tokopilsatdb-admin

EXPOSE 3032
CMD [ "yarn", "start" ]
