FROM node:6.11.3-alpine
RUN mkdir -p /home/web
#COPY *.js /home/web/
COPY *.json /home/web/
COPY src /home/web/src/
#COPY *.json /home/web/
WORKDIR /home/web
RUN npm install
RUN npm test
ENTRYPOINT npm run start

