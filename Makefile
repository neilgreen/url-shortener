include .env
export $(shell sed 's/=.*//' .env)

.PHONY: $(MAKECMDGOALS)

setup:
	npm install
	psql -d ${PG_DATABASE} -a -f ./sql/setup.sql

dev:
	node_modules/.bin/nodemon start.js

server:
	node start.js

test:
	npm test
