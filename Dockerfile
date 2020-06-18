# FROM node:latest
# #EXPOSE 8080
# #WORKDIR /app
# COPY package-lock.json package.json ./
# #RUN npm install --no-progress --ignore-optional
# RUN npm install
# #CMD npm run start:dev     # webpack-dev-server --host 0.0.0.0 --hot

# Base the image off of the NodeJS image
#  FROM node:12.18

#  # Set the working directory to be the HOME directory
#  WORKDIR /

#  # Install NPM dependencies early in the build process
#  COPY ./package.json /
#  #COPY ./package-lock.json /root
#  RUN npm install

#  # Specify what port will be available - necessary for VPC network
#  EXPOSE 3000

#  # Copy our application files to the image
# #  COPY ./.browserslistrc /root
# #  COPY ./.eslintrc.js /root
# #  COPY ./.env /root
# #  COPY ./babel.config.js /root
# #  COPY ./README.md /root
# #  COPY ./vue.config.js /root
# #  COPY ./public /root/public
# #  COPY ./src /root/src

#  # Start the container running our Node app
#  CMD ["npm", "run", "serve"]


FROM node:12.18
WORKDIR /app
COPY package*.json ./
# RUN apk update && apk install -y gnupg2 ca-certificates wget git
# RUN apk update && apk install -y git
# RUN npm install -g --unsafe-perm cypress
RUN  npm install


EXPOSE 3000
CMD ["npm", "run", "serve"]


# docker-composer up # to start the compilation process
# to install npm package run
# docker-compose exec web npm i bootstrap