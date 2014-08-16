var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#symmetrical', function() {
  it('can detect symmetry over the y-axis', function() {
    var result = Array2D.symmetrical([
      [1,2,3,3,2,1],
      [4,5,6,6,5,4],
      [9,9,1,1,9,9],
      [4,6,4,4,6,4],
      [5,5,5,5,5,5]
    ], Array2D.AXES.Y);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect symmetry over the x-axis', function() {
    var result = Array2D.symmetrical([
      [1,1,5,6,0,4],
      [1,2,0,7,0,3],
      [2,3,5,8,0,2],
      [2,3,5,8,0,2],
      [1,2,0,7,0,3],
      [1,1,5,6,0,4]
    ], Array2D.AXES.X);

    var expected = true;

    assert.strictEqual(result, expected);
  });
});

describe('#hsymmetrical', function() {
  it('can detect horizontal symmetry', function() {
    var result = Array2D.hsymmetrical([
      [1,2,3,3,2,1],
      [4,5,6,6,5,4],
      [9,9,1,1,9,9],
      [4,6,4,4,6,4],
      [5,5,5,5,5,5]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect horizontal non-symmetry', function() {
    var result = Array2D.hsymmetrical([
      [1,2,3,3,2,1],
      [4,5,6,6,5,4],
      [9,9,1,1,9,9],
      [4,6,4,4,7,4],
      [5,5,5,5,5,5]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#vsymmetrical', function() {
  it('can detect vertical symmetry', function() {
    var result = Array2D.vsymmetrical([
      [1,1,5,6,0,4],
      [1,2,0,7,0,3],
      [2,3,5,8,0,2],
      [2,3,5,8,0,2],
      [1,2,0,7,0,3],
      [1,1,5,6,0,4]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect vertical non-symmetry', function() {
    var result = Array2D.vsymmetrical([
      [1,1,5,6,0,4],
      [1,2,0,7,0,3],
      [2,3,5,8,0,2],
      [2,3,5,8,0,2],
      [1,2,0,7,1,3],
      [1,1,5,6,0,4]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});
