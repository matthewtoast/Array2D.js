var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#clone', function() {
  it('can clone a grid', function() {
    var result = Array2D.clone([
      [1,2,3,4],
      [5,6,7,8],
      [9,0,1,2],
      [3,4,5,6]
    ]);

    var expected = [
      [1,2,3,4],
      [5,6,7,8],
      [9,0,1,2],
      [3,4,5,6]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[0][3], result[0][3]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[1][3], result[1][3]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
    assert.strictEqual(expected[2][3], result[2][3]);
    assert.strictEqual(expected[3][0], result[3][0]);
    assert.strictEqual(expected[3][1], result[3][1]);
    assert.strictEqual(expected[3][2], result[3][2]);
    assert.strictEqual(expected[3][3], result[3][3]);
  });
});

describe('#build', function() {
  it('can build an empty grid', function() {
    var result = Array2D.build(4, 4);

    var expected = [
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[0][3], result[0][3]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[1][3], result[1][3]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
    assert.strictEqual(expected[2][3], result[2][3]);
    assert.strictEqual(expected[3][0], result[3][0]);
    assert.strictEqual(expected[3][1], result[3][1]);
    assert.strictEqual(expected[3][2], result[3][2]);
    assert.strictEqual(expected[3][3], result[3][3]);
  });

  it('can build a grid with a preset value', function() {
    var result = Array2D.build(4, 4, 1);

    var expected = [
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[0][3], result[0][3]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[1][3], result[1][3]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
    assert.strictEqual(expected[2][3], result[2][3]);
    assert.strictEqual(expected[3][0], result[3][0]);
    assert.strictEqual(expected[3][1], result[3][1]);
    assert.strictEqual(expected[3][2], result[3][2]);
    assert.strictEqual(expected[3][3], result[3][3]);
  });
});

describe('#buildWith', function() {
  it('can build a grid with a function', function() {
    var result = Array2D.buildWith(4, 4, function(r, c) {
      return r * c;
    });

    var expected = [
      [0,0,0,0],
      [0,1,2,3],
      [0,2,4,6],
      [0,3,6,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[0][3], result[0][3]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[1][3], result[1][3]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
    assert.strictEqual(expected[2][3], result[2][3]);
    assert.strictEqual(expected[3][0], result[3][0]);
    assert.strictEqual(expected[3][1], result[3][1]);
    assert.strictEqual(expected[3][2], result[3][2]);
    assert.strictEqual(expected[3][3], result[3][3]);
  });
});

describe('#serialize', function() {
  it('can serialize a grid to a string', function() {
    var result = Array2D.serialize([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = "[[1,2,3],[4,5,6],[7,8,9]]"

    assert.strictEqual(expected, result);
  });
});

describe('#nullify', function() {
  it('can convert all cells to null', function() {
    var result = Array2D.nullify([
      [1,2,3],
      [4,5,6,7],
      [7,8]
    ]);

    var expected = [
      [null,null,null],
      [null,null,null,null],
      [null,null]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[0][3], result[0][3]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
    assert.strictEqual(expected[1][3], result[1][3]);
    assert.strictEqual(expected[2][0], result[2][0]);
    assert.strictEqual(expected[2][1], result[2][1]);
    assert.strictEqual(expected[2][2], result[2][2]);
    assert.strictEqual(expected[2][3], result[2][3]);
  });
});

describe('#integerize', function() {
  it('can integerize a grid', function() {
    var result = Array2D.integerize([
      [1,'2','3'],
      ['4',5.5,'6']
    ]);

    var expected = [
      [1,2,3],
      [4,5,6]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
  });
});

describe('#stringize', function() {
  it('can stringize a grid', function() {
    var result = Array2D.stringize([
      [1,2,3],
      [4,5.5,null]
    ]);

    var expected = [
      ['1','2','3'],
      ['4','5.5','null']
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], result[0][2]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], result[1][2]);
  });
});
