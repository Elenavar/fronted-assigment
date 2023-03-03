build:
	${DOCKER_COMPOSE} build

start:
	@echo "Starting the development server..."
	@echo "Run 'make stop' or ${DOCKER_COMPOSE} to stop it."
	${DOCKER_COMPOSE} up &

stop:
	${DOCKER_COMPOSE} down

$PHONY: build start stop
