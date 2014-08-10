var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#empty', function() {
  it('can detect whether a grid is empty', function() {
    var result = Array2D.empty([])

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect whether a grid is empty', function() {
    var result = Array2D.empty([[]])

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect whether a grid is not empty', function() {
    var result = Array2D.empty([[1]])

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#blank', function() {
  it('can detect whether a grid is blank', function() {
    var result = Array2D.blank([[null,null,null,undefined]])

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect whether a grid is blank', function() {
    var result = Array2D.blank([[undefined]])

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect whether a grid is not blank', function() {
    var result = Array2D.blank([[null,null,0]])

    var expected = false;

    assert.strictEqual(expected, result);
  });

  it('can detect whether a grid is not blank', function() {
    var result = Array2D.blank([[null,false,null]])

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#contains', function() {
  it('can detect whether a grid contains a value', function() {
    var result = Array2D.contains([
      [1,2,3],
      [4,5,6],
      [7,888,9]
    ], 888);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect whether a grid does not contain a value', function() {
    var result = Array2D.contains([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 888);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});
