const getUrlForTokenFromDatabase = require('./getUrlForTokenFromDatabase');

async function tokenExistsInDatabase(token) {
  const url = await getUrlForTokenFromDatabase(token);
  
  return url !== null;
}

module.exports = tokenExistsInDatabase;
