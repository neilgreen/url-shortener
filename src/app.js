require('./setupGlobals');

const express = require('express');
const nocache = require('nocache');
const compression = require('compression');
const helmet = require('helmet');

const TokenUrlCache = require('./domain/TokenUrlCache');
const forwardTokenRoute = require('./routes/forwardTokenRoute');
const generateTokenRoute = require('./routes/generateTokenRoute');

global.tokenUrlCache = new TokenUrlCache(TOKEN_URL_CACHE_SIZE_LIMIT);

global.log = console.log; // May want a different log function in production

app = express();

app.use(helmet());
app.use(compression());
app.use(nocache());
app.use(express.static('public'));
app.use(express.json());

app.get('/*', forwardTokenRoute);
app.post('/generate-token', generateTokenRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  res.status(errorStatus);
  return res.send(errorStatus);
});

module.exports = app;
