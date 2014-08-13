var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#flatten', function(){
  it('can flatten a grid', function() {
    var result = Array2D.flatten([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [1,2,3,4,5,6,7,8,9];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
    assert.strictEqual(expected[4], result[4]);
    assert.strictEqual(expected[5], result[5]);
    assert.strictEqual(expected[6], result[6]);
    assert.strictEqual(expected[7], result[7]);
    assert.strictEqual(expected[8], result[8]);
  });
});

describe('#squash', function(){
  it('can squash a grid', function() {
    var result = Array2D.squash([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [1,4,7,2,5,8,3,6,9];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
    assert.strictEqual(expected[4], result[4]);
    assert.strictEqual(expected[5], result[5]);
    assert.strictEqual(expected[6], result[6]);
    assert.strictEqual(expected[7], result[7]);
    assert.strictEqual(expected[8], result[8]);
  });
});

describe('#reduce', function(){
  it('can reduce a grid', function() {
    var result = Array2D.reduce([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], function(row) {
      return row[0] + row[1] + row[2];
    });

    var expected = [6,15,24];

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

describe('#boildown', function(){
  it('can boildown a grid', function() {
    var result = Array2D.boildown([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], function(column) {
      return column[0] + column[1] + column[2];
    });

    var expected = [12,15,18];

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
