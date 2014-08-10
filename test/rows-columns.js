var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#top', function() {
  it('can retrieve the top', function() {
    var result = Array2D.top([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [1,2,3];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[2][0], result[2][0]);
  });
});

describe('#bottom', function() {
  it('can retrieve the bottom', function() {
    var result = Array2D.bottom([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [7,8,9];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[2][0], result[2][0]);
  });
});

describe('#left', function() {
  it('can retrieve the left', function() {
    var result = Array2D.left([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [1,4,7];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[2][0], result[2][0]);
  });
});

describe('#right', function() {
  it('can retrieve the right', function() {
    var result = Array2D.right([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [3,6,9];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[2][0], result[2][0]);
  });
});

describe('#widest', function() {
  it('can determine the widest row', function() {
    var result = Array2D.widest([
      [1,2,3,4,5],
      [6,7,8],
      [9],
      [0,1,2,3],
      [4,5]
    ]);

    var expected = [1,2,3,4,5];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
    assert.strictEqual(expected[4], result[4]);
  });
});

describe('#thinnest', function() {
  it('can determine the thinnest row', function() {
    var result = Array2D.thinnest([
      [1,2,3,4,5],
      [6,7,8],
      [9],
      [0,1,2,3],
      [4,5]
    ]);

    var expected = [9];

    assert.strictEqual(expected[0], result[0]);
  });
});

describe('#tallest', function() {
  it('can determine the tallest column', function() {
    var result = Array2D.tallest([
      [1,6,8,1,1],
      [2,7,9],
      [3],
      [4],
      [5]
    ]);

    var expected = [1,2,3,4,5];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
    assert.strictEqual(expected[4], result[4]);
  });
});

describe('#shortest', function() {
  it('can determine the shortest column', function() {
    var result = Array2D.shortest([
      [1,6,8,88,1],
      [2,7,9],
      [3],
      [4],
      [5]
    ]);

    var expected = [88];

    assert.strictEqual(expected[0], result[0]);
  });
});
