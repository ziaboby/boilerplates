FROM  node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm","run","build:dev:watch" ]
