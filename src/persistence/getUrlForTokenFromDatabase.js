const database = require('./database');

async function getUrlForTokenFromDatabase(token) {
  const [row] = await database('urls').select('url').where({token});

  return row !== undefined ? row.url : null;
}

module.exports = getUrlForTokenFromDatabase;
