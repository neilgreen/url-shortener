class TokenUrlCache {
  
  constructor(limit) {
    this.limit = limit;
    this.tokensWithUrls = [];
  }
  
  get length() {
    return this.tokensWithUrls.length
  }
  
  addTokenWithUrl(token, url) {
    if (this.findUrlForToken(token) !== null)
      return;
    
    if (this.tokensWithUrls.length === this.limit)
      this.tokensWithUrls.pop();
    
    this.tokensWithUrls.unshift({token, url});
  }
  
  findUrlForToken(tokenToFind) {
    const found = this.tokensWithUrls.find(({token}) => tokenToFind === token);
    return found !== undefined ? found.url : null;
  }

}

module.exports = TokenUrlCache;
