const knex = require('knex');

const database = knex({
  client: 'pg',
  debug: false,
  connection: PG_DATABASE_CONNECTION,
  searchPath: ['knex','public']
});

module.exports = database;

