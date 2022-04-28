FROM node

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]
