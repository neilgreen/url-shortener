const randtoken = require('rand-token');

const generateToken = (length) => {
  return randtoken.generate(length); 
};

module.exports = generateToken;
