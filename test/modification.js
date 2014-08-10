var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#', function() {
  it('can ', function() {

  });
});

describe('#vflip', function() {
  it('can vertically flip a grid', function() {
    var result = Array2D.vflip([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [7,8,9],
      [4,5,6],
      [1,2,3]
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

describe('#hflip', function() {
  it('can horizontally flip a grid', function() {
    var result = Array2D.hflip([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [3,2,1],
      [6,5,4],
      [9,8,7]
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

describe('#transpose', function() {
  it('can transpose a grid', function() {
    var result = Array2D.transpose([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [1,4,7],
      [2,5,8],
      [3,6,9]
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

  it('can transpose a *ragged* grid', function() {
    var result = Array2D.transpose([
      [1,2,3,4,5],
      [6,7],
      [8,9,0,1]
    ]);

    var expected = [
      [1,6,8],
      [2,7,9],
      [3,undefined,0],
      [4,undefined,1],
      [5]
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
    assert.strictEqual(expected[3][0], result[3][0]);
    assert.strictEqual(expected[3][1], result[3][1]);
    assert.strictEqual(expected[3][2], result[3][2]);
    assert.strictEqual(expected[4][0], result[4][0]);
    assert.strictEqual(expected[4][1], result[4][1]);
    assert.strictEqual(expected[4][2], result[4][2]);
  });
});
