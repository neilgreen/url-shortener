const normalize = require('normalize-url');

const normalizeUrl = (url) => {
  try {
    return normalize(url); 
  } catch (e) {
    return null
  }
};

module.exports = normalizeUrl;
