FROM node:16.16.0

WORKDIR /server

COPY package.json /server/

RUN npm install

COPY . /server/

EXPOSE 5001

CMD ["npm", "start"]