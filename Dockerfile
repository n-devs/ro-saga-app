FROM node:18

WORKDIR /ro-saga-app

RUN npm i -g @ionic/cli

COPY ./package.json ./

# RUN npm i
# COPY ./ ./

CMD [ "npm", "run","dev" ]