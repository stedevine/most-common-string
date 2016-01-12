var test = require('tape');
var systemUnderTest = require('../lib/file.js');

test('mostCommon() should return the most common string in the input array', assert => {
  assert.equal(systemUnderTest.mostCommon(["b", "a", "a"]), "a", 'a should be the most common string.');
  assert.equal(systemUnderTest.mostCommon(["b", "b", "a"]), "b", 'b should be the most common string.');
  assert.equal(systemUnderTest.mostCommon(["c", "d", "e"]), "c", 'a should be the most common string.');
  assert.equal(systemUnderTest.mostCommon(["f", "f", "f"]), "f", 'a should be the most common string.');
  assert.end();
})
