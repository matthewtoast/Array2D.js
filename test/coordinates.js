var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#find', function() {
  it('can return coordinates for matching cells', function() {
    var result = Array2D.find([
      [1,0,1,1,0],
      [0,0,0,0,1],
      [0,0,1,0,0],
      [0,1,0,0,0],
      [0,1,1,1,1]
    ], function(cell) {
      return cell === 1;
    });

    var expected = [
      [0,0],
      [0,2],
      [0,3],
      [1,4],
      [2,2],
      [3,1],
      [4,1],
      [4,2],
      [4,3],
      [4,4]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#contiguous', function() {
  it('can return coordinates of contiguous cell groups', function() {
    var result = Array2D.contiguous([
      [0,1,0,0,0],
      [0,0,1,0,0],
      [0,0,1,1,0],
      [0,0,0,0,1],
      [1,1,0,0,1]
    ], function(cell) {
      return cell === 1;
    });

    var expected = [
      [[0,1]],
      [[1,2],[2,2],[2,3]],
      [[3,4],[4,4]],
      [[4,0],[4,1]]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#touching', function() {
  it('can return coordinates for touching cell groups', function() {
    var result = Array2D.touching([
      [0,1,0,0,0],
      [0,0,1,0,0],
      [0,0,1,1,0],
      [0,0,0,0,1],
      [1,1,0,0,1]
    ], function(cell) {
      return cell === 1;
    });

    var expected = [
      [[0,1],[1,2],[2,2],[2,3],[3,4],[4,4]],
      [[4,0],[4,1]]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});
