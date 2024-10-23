FROM node/1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD [ "nodemon", "index.js" ]