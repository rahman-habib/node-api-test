FROM node:20.18.1

# create app directory inside the container
RUN mkdir /src
WORKDIR /src
# copping package.json inside the container
COPY package*.json ./

# install app dependencies
RUN npm install 

#copying the souce code fo project inside the contanier
COPY . .

#expose port 
EXPOSE 9010

CMD [ "node","app"]