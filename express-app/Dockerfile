#From Base Image
FROM node:16

#Create working directory
WORKDIR /app

#Copy package json files in working directory
COPY package*.json ./

#RUN NPM INIT/Install dependencies
RUN npm install

#Copy SourceFiles.
COPY . .

CMD ["node", "index.js"]