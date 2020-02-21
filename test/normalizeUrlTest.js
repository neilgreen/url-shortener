const assert = require('assert').strict;
const normalizeUrl = require('../src/domain/normalizeUrl');

describe('Normalize URL', () => {

  it('Should normalize urls', () => {
    [ // NOTE: Can go crazy here, but exercises the basic code path
      {
        url: "domain.com",
        expected: "http://domain.com"
      },
      {
        url: "https://domain.com",
        expected: "https://domain.com"
      },
      {
        url: "sub-domain.domain.com",
        expected: "http://sub-domain.domain.com"
      }
    ].forEach(({url, expected}) => {
      assert.equal(expected, normalizeUrl(url));  
    });
    
  });
  
  it('Should return null for invalid urls', () => {
    [ // NOTE: Can go crazy here, but exercises the basic code path
      "",
      "asdf asdf"
    ].forEach((url) => {
      assert.equal(null, normalizeUrl(url), `Should not have been able to normalize: ${url}`)
    });    
  });
  
});
