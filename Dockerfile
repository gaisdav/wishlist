FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000
