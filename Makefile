up:
	docker-compose -f docker-compose.local.yml up -d

down:
	docker-compose -f docker-compose.local.yml down

nginx-reload:
	docker-compose -f docker-compose.local.yml exec nginx nginx -s reload

build:
	docker build -t bintangbahy/nginx-njs-learn:latest .

generate:
	python3 scripts/gen-id.py