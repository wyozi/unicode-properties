/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const unicode = require('../');
const assert = require('assert');

describe('unicode-properties', function() {
  it('getCategory', function() {
    assert.equal(unicode.getCategory('2'.charCodeAt()), 'Nd');
    return assert.equal(unicode.getCategory('x'.charCodeAt()), 'Ll');
  });
    
  it('getCombiningClass', function() {
    assert.equal(unicode.getCombiningClass('x'.charCodeAt()), 'Not_Reordered');
    assert.equal(unicode.getCombiningClass('́'.charCodeAt()), 'Above');
    assert.equal(unicode.getCombiningClass('ٕ'.charCodeAt()), 'Below');
    return assert.equal(unicode.getCombiningClass('ٔ'.charCodeAt()), 'Above');
  });

  it('getScript', function() {
    assert.equal(unicode.getScript('x'.charCodeAt()), 'Latin');
    return assert.equal(unicode.getScript('غ'.charCodeAt()), 'Arabic');
  });
    
  it('getEastAsianWidth', function() {
    assert.equal(unicode.getEastAsianWidth('x'.charCodeAt()), 'Na');
    assert.equal(unicode.getEastAsianWidth('杜'.charCodeAt()), 'W');
    return assert.equal(unicode.getEastAsianWidth('Æ'.charCodeAt()), 'A');
  });
    
  it('getNumericValue', function() {
    assert.equal(unicode.getNumericValue('2'.charCodeAt()), 2);
    return assert.equal(unicode.getNumericValue('x'.charCodeAt()), null);
  });
    
  it('isAlphabetic', function() {
    assert(unicode.isAlphabetic('x'.charCodeAt()));
    return assert(!unicode.isAlphabetic('2'.charCodeAt()));
  });
    
  it('isDigit', function() {
    assert(!unicode.isDigit('x'.charCodeAt()));
    return assert(unicode.isDigit('2'.charCodeAt()));
  });
    
  it('isPunctuation', function() {
    assert(!unicode.isPunctuation('x'.charCodeAt()));
    return assert(unicode.isPunctuation('.'.charCodeAt()));
  });
    
  it('isLowerCase', function() {
    assert(!unicode.isLowerCase('X'.charCodeAt()));
    assert(!unicode.isLowerCase('2'.charCodeAt()));
    return assert(unicode.isLowerCase('x'.charCodeAt()));
  });
    
  it('isUpperCase', function() {
    assert(unicode.isUpperCase('X'.charCodeAt()));
    assert(!unicode.isUpperCase('2'.charCodeAt()));
    return assert(!unicode.isUpperCase('x'.charCodeAt()));
  });
    
  it('isTitleCase', function() {
    assert(unicode.isTitleCase('ǲ'.charCodeAt()));
    assert(!unicode.isTitleCase('2'.charCodeAt()));
    return assert(!unicode.isTitleCase('x'.charCodeAt()));
  });
    
  it('isWhiteSpace', function() {
    assert(unicode.isWhiteSpace(' '.charCodeAt()));
    assert(!unicode.isWhiteSpace('2'.charCodeAt()));
    return assert(!unicode.isWhiteSpace('x'.charCodeAt()));
  });
    
  it('isBaseForm', function() {
    assert(unicode.isBaseForm('2'.charCodeAt()));
    assert(unicode.isBaseForm('x'.charCodeAt()));
    return assert(!unicode.isBaseForm('́'.charCodeAt()));
  });
    
  return it('isMark', function() {
    assert(!unicode.isMark('2'.charCodeAt()));
    assert(!unicode.isMark('x'.charCodeAt()));
    return assert(unicode.isMark('́'.charCodeAt()));
  });
});
    