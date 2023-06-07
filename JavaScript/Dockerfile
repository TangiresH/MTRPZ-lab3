FROM node:18.15.0-bullseye-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
