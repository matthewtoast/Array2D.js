var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#same', function() {
  it('can tell if two grids are the same', function() {
    var result = Array2D.same(
      [[1,2,3],
       [4,5,6],
       [7,8,9]],

      [[1,2,3],
       [4,5,6],
       [7,8,9]]
    );

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can tell if two grids are not the same', function() {
    var result = Array2D.same(
      [[1,2,3],
       [4,5,6],
       [7,8,9]],

      [[1,2,3],
       [4,5,6],
       [7,8,0]]
    );

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#different', function() {
  it('can tell if two grids are different', function() {
    var result = Array2D.different(
      [[1,2,3],
       [4,5,6],
       [7,8,9]],

      [[1,2,3],
       [4,5,6],
       [7,8,0]]
    );

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can tell if two grids are not different', function() {
    var result = Array2D.different(
      [[1,2,3],
       [4,5,6],
       [7,8,9]],

      [[1,2,3],
       [4,5,6],
       [7,8,9]]
    );

    var expected = false;

    assert.strictEqual(expected, result);
  });
});
