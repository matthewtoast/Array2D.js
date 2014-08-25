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

describe('#setRow', function() {
  it('can set a row', function() {
    var result = Array2D.setRow([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, ['b','b','b']);

    var expected = [
      [1,2,3],
      ['b','b','b'],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#setColumn', function() {
  it('can set a column', function() {
    var result = Array2D.setColumn([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, ['a','a','a']);

    var expected = [
      [1,'a',3],
      [4,'a',6],
      [7,'a',9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#fillRow', function() {
  it('can fill a row', function() {
    var result = Array2D.fillRow([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 'x');

    var expected = [
      [1,2,3],
      ['x','x','x'],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#fillColumn', function() {
  it('can fill a column', function() {
    var result = Array2D.fillColumn([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 'x');

    var expected = [
      [1,'x',3],
      [4,'x',6],
      [7,'x',9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#spliceRow', function() {
  it('can insert a row', function() {
    var result = Array2D.spliceRow([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, ['x','x','x']);

    var expected = [
      [1,2,3],
      ['x','x','x'],
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#spliceColumn', function() {
  it('can insert a column', function() {
    var result = Array2D.spliceColumn([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, ['x','x','x']);

    var expected = [
      [1,'x',2,3],
      [4,'x',5,6],
      [7,'x',8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#deleteRow', function() {
  it('can delete a row', function() {
    var result = Array2D.deleteRow([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1);

    var expected = [
      [1,2,3],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#deleteColumn', function() {
  it('can delete a column', function() {
    var result = Array2D.deleteColumn([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1);

    var expected = [
      [1,3],
      [4,6],
      [7,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});
