const normalizeUrl = require('../domain/normalizeUrl');
const validateUrl = require('../domain/validateUrl');
const generateUniqueToken = require('../persistence/generateUniqueToken');
const getTokenForUrlFromDatabase = require('../persistence/getTokenForUrlFromDatabase');
const saveTokenAndUrlToDatabase = require('../persistence/saveTokenAndUrlToDatabase');

async function generateTokenRoute(req, res) {
  try {
    const url = normalizeUrl(req.body.url);
    
    if (url === null || !validateUrl(url)) {
      return res.json({ success: false, error: 'URL is not valid' });
    }

    let token = await getTokenForUrlFromDatabase(url);
        
    if (token !== null) {
      return res.json(buildSuccessJson({req, token, url}));
    }

    token = await generateUniqueToken();

    await saveTokenAndUrlToDatabase(token, url);
    
    tokenUrlCache.addTokenWithUrl(token, url);
    
    res.json(buildSuccessJson({req, token, url}));
  } catch (e) {
    res.json({ success: false, error: e.message});
  }
}

buildSuccessJson = ({req, token, url}) => {
  const port = SERVER_PORT === 80 || SERVER_PORT === 443 ? '' : `:${SERVER_PORT}`;
  const shortUrl = `${req.protocol}://${req.hostname}${port}/${token}`;
  return {success: true, token, url, shortUrl}
};

module.exports = generateTokenRoute;
