start:
	sudo docker-compose up -d
down:
	sudo docker-compose down
stop:
	sudo docker-compose stop titamedia
coverage:
	sudo docker-compose exec titamedia npm run test:coverage
test:
	sudo docker-compose exec titamedia npm run test
build:
	sudo docker-compose exec titamedia npm run build
