FROM node:10.13.0

RUN mkdir /app
WORKDIR /app

COPY frontend/package.json /app
COPY frontend/package-lock.json /app

RUN npm install

COPY frontend /app

CMD ["npm", "start"]