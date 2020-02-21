const database = require('./database');

async function getTokenForUrlFromDatabase(url) {
  const [row] = await database('urls').select('token').where({url});

  return row !== undefined ? row.token : null;
}

module.exports = getTokenForUrlFromDatabase;
