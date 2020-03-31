#What image do you want to start building on?
From node:latest

#Make a folder in your image where your app's source can live
RUN mkdir -p /docker/app

#Tell your container where your app's source will live
WORKDIR /docker/app

#What source code do you want to copy, and where to put it?
COPY . /docker/app

#Does your app have any dependencies that should be installed?
RUN npm install

#What port will the container talk to the outside world with once created?
EXPOSE 4001

#How do you start your app?
CMD ["npm", "run", "server:dev"]