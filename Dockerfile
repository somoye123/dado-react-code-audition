# pull official base image
FROM node:13.12.0-alpine

RUN mkdir /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

# install app dependencies
RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]