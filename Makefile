#dev-init-backend:
#	docker-compose -f docker-compose-dev.yml run --rm php-cli composer create-project --prefer-dist laravel/laravel ./

dev-init-client:
	docker-compose -f docker-compose-dev.yml run --rm node npm install

dev-start:
	docker-compose -f docker-compose-dev.yml up --build

dev-stop:
	docker-compose -f docker-compose-dev.yml down