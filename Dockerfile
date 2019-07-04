### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10-alpine as builder

COPY ./DevActivator/package.json ./DevActivator/npm-shrinkwrap.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY DevActivator .

## Run tslint

RUN npm run lint

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm run prod

### STAGE 2: Setup ###

FROM nginx:alpine

# COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*

# ## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY ./DevActivator/wwwroot /usr/share/nginx/html
COPY ./nginx/index.html /usr/share/nginx/html
COPY --from=builder /ng-app/wwwroot/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

# * docker image build -t ovcharov/devactivator:0.1 .
# * docker run -p 3000:80 --rm ovcharov/devactivator:0.1

# * docker push ovcharov/devactivator:0.1
# ! docker pull wert.industry:81/dockerhub/library/living-spa:0.1
# ! docker run -p 3000:80 --rm -t ovcharov/devactivator:0.1