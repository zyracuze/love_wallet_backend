git pull origin master
docker container rm -f backend
docker image build -t backend .
#docker container run -d --name backend -p 3000:3000 backend
