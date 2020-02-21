global.TOKEN_URL_CACHE_SIZE_LIMIT = process.env.TOKEN_URL_CACHE_SIZE_LIMIT || 10000;
global.COLLISION_AVOIDANCE_ATTEMPTS_ALLOWED = process.env.COLLISION_AVOIDANCE_ATTEMPTS_ALLOWED || 5;
global.URL_TOKEN_LENGTH = process.env.URL_TOKEN_LENGTH || 7;
global.SERVER_PORT = process.env.SERVER_PORT || 8080;

global.PG_DATABASE_CONNECTION = { // Would need an alternate production config depending on deployment environment
  port: process.env.PG_PORT || 5432,
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE,
  user: process.env.PG_DATABASE_USER,
  password: process.env.PG_DATABASE_PASSWORD
};
