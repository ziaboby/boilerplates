FROM  node:12
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
EXPOSE 3080 
CMD [ "npm","run", "dev" ]
