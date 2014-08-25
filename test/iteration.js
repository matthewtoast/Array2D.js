var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#eachCell', function() {
  it('can iterate over each cell', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    var expected = [1,2,3,4,5,6,7,8,9];
    var result = [];

    Array2D.eachCell(grid, function(cell, r, c) {
      result.push(cell);
    });

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#nthCell', function() {
  it('can iterate over every nth cell', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    var expected = [2,4,6,8];
    var result = [];

    Array2D.nthCell(grid, 2, 1, function(cell, r, c) {
      result.push(cell);
    });

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#eachRow', function() {
  it('can iterate over each row', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    Array2D.eachRow(grid, function(row, r) {
      assert.strictEqual(grid[r][0], row[0]);
      assert.strictEqual(grid[r][1], row[1]);
      assert.strictEqual(grid[r][2], row[2]);
    });
  });
});

describe('#eachColumn', function() {
  it('can iterate over each column', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    Array2D.eachColumn(grid, function(column, c) {
      assert.strictEqual(column[0], grid[0][c]);
      assert.strictEqual(column[1], grid[1][c]);
      assert.strictEqual(column[2], grid[2][c]);
    });
  });
});

describe('#forArea', function() {
  it('can iterate over an area', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    var expected = [1,2,4,5];
    var result = [];

    Array2D.forArea(grid, 0, 0, 2, 2, function(cell, r, c) {
      result.push(cell);
    });

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#forRow', function() {
  it('can iterate over a row', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    var expected = [4,5,6];
    var result = [];

    Array2D.forRow(grid, 1, function(cell, r, c) {
      result.push(cell);
    });

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#forColumn', function() {
  it('can iterate over a column', function() {
    var grid = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    var expected = [2,5,8];
    var result = [];

    Array2D.forColumn(grid, 1, function(cell, r, c) {
      result.push(cell);
    });

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});
