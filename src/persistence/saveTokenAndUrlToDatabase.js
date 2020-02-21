const database = require('./database');

async function saveTokenAndUrlToDatabase(token, url) {
  await database('urls').insert({token, url});
}

module.exports = saveTokenAndUrlToDatabase;
