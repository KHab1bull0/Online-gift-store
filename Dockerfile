
FROM node:16-alpine

WORKDIR /app

COPY package*.json . 

RUN npm install 

COPY . . 

ENV DOT_ENV_PATH=./.env

EXPOSE 4000

CMD ["npm", "run", "start"]
