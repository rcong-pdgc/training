FROM node:16-alpine

WORKDIR /usr/app/
COPY package*.json ./

RUN npm install

COPY src/ ./

EXPOSE 8080

CMD [ "npm", "run", "serve" ]