var Array2D = require('./../Array2D');
var assert = require('assert');

describe('readme example', function() {
  it('is accurate', function() {
    // Keep the first example in the README honest. :-)
    var grid = [[1,2,3], [4,5,6], [7,8,9]];
    var result = Array2D.swap(Array2D.transpose(grid), 1,1, 2,2);
    var str = Array2D.serialize(result);
    assert.strictEqual(str, "[[1,4,7],[2,9,8],[3,6,5]]");
  });
});

describe('#get', function() {
  it('can get a cell', function() {
    var result = Array2D.get([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = 5;

    assert.strictEqual(expected, result);
  });
});

describe('#set', function() {
  it('can set a cell', function() {
    var result = Array2D.set([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 0);

    var expected = [
      [1,2,3],
      [4,0,6],
      [7,8,9]
    ];

    assert.strictEqual(expected[1][1], result[1][1]);
  });
});

describe('#width', function() {
  it('can calculate the grid width', function() {
    var result = Array2D.width([
      [1,2,3,4,5,6],
      [8,9,0,1,2,3,4,5],
      [1,2,3]
    ]);

    var expected = 8;

    assert.strictEqual(expected, result);
  });
});

describe('#height', function() {
  it('can calculate the grid height', function() {
    var result = Array2D.height([
      [1,2,3,4,5,6],
      [8,9,0,1,2,3,4,5],
      [1,2,3],
      [1,2],
      [1,2],
      [undefined,1]
    ]);

    var expected = 6;

    assert.strictEqual(expected, result);
  });
});

describe('#dimensions', function() {
  it('can calculate the dimensions', function() {
    var result = Array2D.dimensions([
      [1,2],
      [3,4,5,6],
      [7]
    ]);

    var expected = [4,3];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
  });
});

describe('#area', function() {
  it('can calculate the area', function() {
    var result = Array2D.area([
      [1,2],
      [3,4,5,6],
      [7]
    ]);

    var expected = 12;

    assert.strictEqual(expected, result);
  });
});

describe('#cells', function() {
  it('can calculate the number of cells', function() {
    var result = Array2D.cells([
      [1,2],
      [3,4,5,6],
      [7]
    ]);

    var expected = 7;

    assert.strictEqual(expected, result);
  });
});
