FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

RUN npm i -g serve

COPY . .

RUN yarn run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
