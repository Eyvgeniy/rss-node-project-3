start:
	docker-compose up

bash:
	docker-compose run --rm --service-ports node /bin/bash

lint:
	npx eslint .
