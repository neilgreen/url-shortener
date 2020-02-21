const assert = require('assert').strict;
const TokenUrlCache = require('../src/domain/TokenUrlCache');

describe('Token Url Cache', () => {

  it('Should return undefined when empty', () => {
      const cache = new TokenUrlCache(10);

      const actual = cache.findUrlForToken('some-token');
      const expected = null;
      
      assert.equal(expected, actual);
  });

  it('Should be able to add and find tokens with urls', () => {
      const cache = new TokenUrlCache(10);

      const token = 'some-token';
      const url = 'some-url';
      
      cache.addTokenWithUrl(token, url);
      
      const actual = cache.findUrlForToken(token);
      const expected = url;
      
      assert.equal(expected, actual);
  });

  it('Should enforce limit', () => {
      const cache = new TokenUrlCache(1);

      const token1 = 'some-token-1';
      const url1 = 'some-url-1';
      
      const token2 = 'some-token-2';
      const url2 = 'some-url-2';
      
      cache.addTokenWithUrl(token1, url1);
      cache.addTokenWithUrl(token2, url2);
      
      assert.equal(true, cache.findUrlForToken(token1) === null, `${token1} was found, but should not have been.`);
      assert.equal(true, cache.findUrlForToken(token2) !== null, `${token2} was not found, but should have been.`);
  });

  it('Should not add duplicate tokens', () => {
      const cache = new TokenUrlCache(10);

      const token = 'some-token';
      const url = 'some-url';
            
      cache.addTokenWithUrl(token, url);
      cache.addTokenWithUrl(token, url);
      
      assert.equal(1, cache.length, `${token} was added twice, but should not have been.`);
  });

});
