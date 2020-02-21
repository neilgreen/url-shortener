const getUrlForTokenFromDatabase = require('../persistence/getUrlForTokenFromDatabase');

async function forwardTokenRoute(req, res) {
  const token = req.path.substring(1);

  const cachedUrl = tokenUrlCache.findUrlForToken(token);

  if (cachedUrl !== null) {
    res.redirect(301, cachedUrl);
    return;
  }
  
  const url = await getUrlForTokenFromDatabase(token);
     
  if (url !== undefined) {
    tokenUrlCache.addTokenWithUrl(token, url);
    res.redirect(301, url);
  } else {
    res.redirect(302, '/');
  }
}

module.exports = forwardTokenRoute;
