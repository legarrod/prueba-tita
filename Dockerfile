FROM node:14.15.2-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ENV TERM xterm 

COPY package.json ./

COPY . ./

RUN npm install --silent

CMD ["npm", "run", "start"]