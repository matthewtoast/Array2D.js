var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#edge', function() {
  it('can detect if a cell is on an edge', function() {
    var result = Array2D.edge([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect if a cell is not on an edge', function() {
    var result = Array2D.edge([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#edges', function() {
  it('can return a list of edges', function() {
    var result = Array2D.edges([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = [Array2D.EDGES.BOTTOM, Array2D.EDGES.RIGHT];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
  });
});

describe('#corner', function() {
  it('can detect if a cell is on a corner', function() {
    var result = Array2D.corner([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect if a cell is not on a corner', function() {
    var result = Array2D.corner([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#corners', function() {
  it('can return a list of corners', function() {
    var result = Array2D.corners([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = [Array2D.CORNERS.BOTTOM_RIGHT];

    assert.strictEqual(expected[0], result[0]);
  });
});

describe('#boundary', function() {
  it('can detect if a cell is on an boundary', function() {
    var result = Array2D.boundary([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect if a cell is not on an boundary', function() {
    var result = Array2D.boundary([
      [1,2,3,4],
      [4,5,6],
      [7,8]
    ], 1, 1);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#boundaries', function() {
  it('can return a list of boundaries', function() {
    var result = Array2D.boundaries([
      [1,2,3],
      [4,5],
      [9]
    ], 1, 1);

    var expected = [Array2D.BOUNDARIES.RIGHT, Array2D.BOUNDARIES.LOWER];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
  });
});

describe('#crook', function() {
  it('can detect if a cell is on a crook', function() {
    var result = Array2D.crook([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can detect if a cell is not on a crook', function() {
    var result = Array2D.crook([
      [1,2,3,4],
      [4,5,6],
      [7,8]
    ], 1, 1);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#crooks', function() {
  it('can return a list of crooks', function() {
    var result = Array2D.crooks([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    var expected = [Array2D.CROOKS.LOWER_RIGHT];

    assert.strictEqual(expected[0], result[0]);
  });
});

describe('#center', function() {
  it('can determine if a cell is at the center', function() {
    var result = Array2D.center([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can determine if a cell is not at the center', function() {
    var result = Array2D.center([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#interior', function() {
  it('can determine if a cell is interior', function() {
    var result = Array2D.interior([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = true;

    assert.strictEqual(expected, result);
  });

  it('can determine if a cell is not interior', function() {
    var result = Array2D.interior([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = false;

    assert.strictEqual(expected, result);
  });
});

describe('#quadrants', function() {
  it('can return a list of quadrants', function() {
    var result = Array2D.quadrants([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 2);

    var expected = [Array2D.QUADRANTS.IV];

    assert.strictEqual(expected[0], result[0]);
  });
});

describe('#orthogonals', function() {
  it('can return a list of orthogonals', function() {
    var result = Array2D.orthogonals([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = [2, 4, 6, 8];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
  });
});

describe('#diagonals', function() {
  it('can return a list of diagonals', function() {
    var result = Array2D.diagonals([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = [1, 3, 7, 9];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
  });
});

describe('#neighbors', function() {
  it('can return a list of neighbors', function() {
    var result = Array2D.neighbors([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1);

    var expected = [1, 2, 3, 4, 6, 7, 8, 9];

    assert.strictEqual(expected[0], result[0]);
    assert.strictEqual(expected[1], result[1]);
    assert.strictEqual(expected[2], result[2]);
    assert.strictEqual(expected[3], result[3]);
    assert.strictEqual(expected[4], result[4]);
    assert.strictEqual(expected[5], result[5]);
    assert.strictEqual(expected[6], result[6]);
    assert.strictEqual(expected[7], result[7]);
  });
});

describe('#neighborhood', function() {
  it('it can return a subgrid neighborhood', function() {
    var result = Array2D.neighborhood([
      [1,2,3,4],
      [5,6,7,8],
      [9,0,1,2],
      [3,4,5,6]
    ], 2, 2);

    var expected = [
      [6,7,8],
      [0,1,2],
      [4,5,6]
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

describe('#euclidean', function() {
  it('can calculate the Euclidean distance', function() {
    var result = Array2D.euclidean([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 0, 0, 2, 2);

    var expected = 2.8284271247461903;

    assert.strictEqual(expected, result);
  });
});

describe('#chebyshev', function() {
  it('can calculate the Chebyshev distance', function() {
    var result = Array2D.chebyshev([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 0, 0, 2, 2);

    var expected = 2;

    assert.strictEqual(expected, result);
  });
});

describe('#manhattan', function() {
  it('can calculate the Manhattan distance', function() {
    var result = Array2D.manhattan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 0, 0, 2, 2);

    var expected = 4;

    assert.strictEqual(expected, result);
  });
});
