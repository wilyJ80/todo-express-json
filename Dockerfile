FROM node:22.9

ENV PORT 3010

EXPOSE 3010

COPY . .

RUN npm i

CMD [ "npm", "run", "server" ]
