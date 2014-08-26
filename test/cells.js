var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#exists', function() {
  it('can detect if a cell exists', function() {
    var result = Array2D.exists([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect if a cell does not exist', function() {
    var result = Array2D.exists([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 4, 4);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#occupied', function() {
  it('can detect if a cell is occupied', function() {
    var result = Array2D.occupied([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect if a cell is not occupied', function() {
    var result = Array2D.occupied([
      [1,2,3],
      [4,null,6],
      [7,8,9]
    ], 1, 1);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#inBounds', function() {
  it('can determine if a cell is in-bounds', function() {
    var result = Array2D.inBounds([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can determine if a cell is not in-bounds', function() {
    var result = Array2D.inBounds([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 5, 5);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#copy', function() {
  it('it can copy a cell', function() {
    var result = Array2D.copy([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 0, 0, 2);

    var expected = [
      [1,2,7],
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
  });
});

describe('#move', function() {
  it('it can move a cell', function() {
    var result = Array2D.move([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 0, 0, 2);

    var expected = [
      [1,2,7],
      [4,5,6],
      [null,8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
  });
});

describe('#swap', function() {
  it('it can swap a cell', function() {
    var result = Array2D.swap([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 0, 0, 2);

    var expected = [
      [1,2,7],
      [4,5,6],
      [3,8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
  });
});
