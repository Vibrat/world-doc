FROM node:lts

WORKDIR /app/website

EXPOSE ${PORT}
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn install

CMD ["yarn", "start"]
