const assert = require('assert').strict;
const generateToken = require('../src/domain/generateToken');

describe('Generate Token', () => {

  it('Should generate valid tokens of a specified length', () => {
    isValid = (length) => /^[a-zA-Z0-9]*$/.test(length);
    
    let token;
    
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ].forEach((length) =>{
      token = generateToken(length);
      
      assert.equal(length, token.length, `Token ${token} is not of the expected length ${length}`);
      assert.equal(true, isValid(token), `Token ${token} is not valid`);
    });
    
  });

});
