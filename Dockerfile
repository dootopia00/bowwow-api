FROM node:16.10

RUN mkdir -p /app
WORKDIR /app
ADD . /app/

COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn build

EXPOSE 8080

# CMD ["yarn","start"]
CMD [ "node", "dist/main" ]
