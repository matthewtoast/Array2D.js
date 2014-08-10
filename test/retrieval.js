var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#harvest', function() {
  it('can harvest an internal grid', function() {
    var result = Array2D.harvest([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 2, 2);

    var expected = [
      [5,6],
      [8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
  });

  it('can harvest an out-of-bounds grid', function() {
    var result = Array2D.harvest([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 3, 3);

    var expected = [
      [5,6,null],
      [8,9,null],
      [null,null,null]
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

  it('can harvest with negative indices', function() {
    var result = Array2D.harvest([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], -1, -1, 3, 3);

    var expected = [
      [null,null,null],
      [null,1,2],
      [null,4,5]
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

describe('#crop', function() {
  it('can crop an internal grid', function() {
    var result = Array2D.crop([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 2, 2);

    var expected = [
      [5,6],
      [8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
  });

  it('does not crop out-of-bounds', function() {
    var result = Array2D.crop([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 3, 3);

    var expected = [
      [5,6],
      [8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], undefined);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], undefined);
    assert.strictEqual(expected[2], undefined);
  });

  it('does not crop with negative indices', function() {
    var result = Array2D.crop([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], -1, -1, 3, 3);

    var expected = [
      [1,2],
      [4,5]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], undefined);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], undefined);
    assert.strictEqual(expected[2], undefined);
  });
});
