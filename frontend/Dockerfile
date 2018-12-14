FROM node:10.13.0

RUN mkdir -p /srv/app/feedbacks-dashboard
WORKDIR /app/directory/feedbacks-dashboard

COPY package.json /srv/app/feedbacks-dashboard
COPY package-lock.json /srv/app/feedbacks-dashboard

RUN npm install

COPY . /srv/app/feedbacks-dashboard

CMD ["npm", "start"]