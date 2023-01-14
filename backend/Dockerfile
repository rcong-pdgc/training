FROM node:alpine

WORKDIR /usr/app/
COPY package*.json ./

RUN npm install

COPY src/ ./

CMD [ "node", "src/controller.js"]