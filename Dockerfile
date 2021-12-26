# Dockerfile for client

# Stage 1: Build react client
FROM node:14.15.3-alpine3.12

# Working directory be app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]