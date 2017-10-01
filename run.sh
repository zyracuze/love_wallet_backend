docker container rm -f backend
docker container rm -f mongo

docker container run -d --name mongo mongo:3.5.13-jessie

docker image build -t backend .
docker container run -d --name backend --link mongo -p 3000:3000 backend
