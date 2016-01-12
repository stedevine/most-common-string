var test = require('tape');
var systemUnderTest = require('../lib/file.js');

test('System under test Should export a function', assert => {
  assert.plan(1);
  const actual = typeof systemUnderTest.foo();
  const expected = 'function';

  assert.equal(actual, expected, 'foo() should return a function.');
})
