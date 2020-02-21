const generateToken = require('../domain/generateToken');
const tokenExistsInDatabase = require('./tokenExistsInDatabase');

async function generateUniqueToken() {
  let attempts = 0, token;
  while (attempts <= COLLISION_AVOIDANCE_ATTEMPTS_ALLOWED) {
    token = generateToken(URL_TOKEN_LENGTH);

    if (await tokenExistsInDatabase(token)) {
      log(`TOKEN_COLLISION: ${token} already exists in database`);
      attempts++;
    } else {
      return token;
    }
  }
  
  log(`COULD_NOT_AVOID_TOKEN_COLLISION: Unique token could not be generated after ${attempts} attempts`);

  throw new Error('A unique token could not be generated.');
}

module.exports = generateUniqueToken;
