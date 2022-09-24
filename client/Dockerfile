FROM node:16.16.0

WORKDIR /client

COPY package.json /client/

RUN npm install

COPY . /client/

EXPOSE 1234

CMD ["npm", "start"]