FROM node:16-alpine3.17

COPY ./package.json /app/

COPY ./index.js /app/

COPY ./route.js /app/


# Set the working directory as default directory
WORKDIR /app

# Install all the necessary packages
RUN npm install

EXPOSE 3000
# To Run.....
CMD ["npm", "start"]