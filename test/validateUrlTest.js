const assert = require('assert').strict;
const validateUrlTest = require('../src/domain/validateUrl');

describe('URL Validation', () => {
  
  it('Should return true for valid URLs', () => {
    const expectedValidUrls = [ // NOTE: Can go crazy here, but exercises the basic code path
      'http://ab.co',
      'https://ab.co'
    ];
    
    for (const url of expectedValidUrls) {
      const isValidUrl = validateUrlTest(url);
      
      assert.equal(true, isValidUrl, `${url} is not valid but should be valid`);
    }
  });
  
  it('Should return false for invalid URLs', () => {
    const expectedInvalidUrls = [ // NOTE: Can go crazy here, but exercises the basic code path
      '',
      'ab.co',
    ];
    
    for (const url of expectedInvalidUrls) {
      const isValidUrl = validateUrlTest(url);
      
      assert.equal(false, isValidUrl, `${url} is valid but should be invalid`);
    }
  });
  
});
