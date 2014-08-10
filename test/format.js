var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#check', function() {
  it('can detect a valid grid', function() {
    var result = Array2D.check([
      [1,2,3]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect an invalid grid', function() {
    var result = Array2D.check([
      "I am just a flat array"
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#ragged', function() {
  it('can detect a ragged grid', function() {
    var result = Array2D.ragged([
      [1,2,3],
      [1,2],
      [1]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect a non-ragged grid', function() {
    var result = Array2D.ragged([
      [1,2,3],
      [1,2,3],
      [1,2,3]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#rectangular', function() {
  it('can detect a rectangular grid', function() {
    var result = Array2D.rectangular([
      [1,2,3],
      [1,2],
      [1]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });

  it('can detect a non-rectangular grid', function() {
    var result = Array2D.rectangular([
      [1,2,3],
      [1,2,3],
      [1,2,3]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });
});

describe('#singular', function() {
  it('can detect a grid with only one cell', function() {
    var result = Array2D.singular([
      [1]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect a grid with multiple cells', function() {
    var result = Array2D.singular([
      [1,2]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#multitudinous', function() {
  it('can detect a grid with multiple cells', function() {
    var result = Array2D.multitudinous([
      [1,2]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect a grid with only one cells', function() {
    var result = Array2D.multitudinous([
      [1]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });
});

describe('#sparse', function() {
  it('can detect lack of sparsity', function() {
    var result = Array2D.sparse([
      [1,2,3],
      [4,5],
      [6,7]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });

  it('can detect sparsity via nulls', function() {
    var result = Array2D.sparse([
      [1,2,3],
      [4,5,null],
      [6,7]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });

  it('can detect sparsity via undefineds', function() {
    var result = Array2D.sparse([
      [1,2,3],
      [4,5],
      [undefined,7]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
  });
});

describe('#dense', function() {
  it('can detect lack of density via nulls', function() {
    var result = Array2D.dense([
      [1,2,3],
      [4,5],
      [null,6,7]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });

  it('can detect lack of density via undefineds', function() {
    var result = Array2D.dense([
      [1,2,3],
      [4,5,undefined],
      [6,7]
    ]);

    var expected = false;

    assert.strictEqual(result, expected);
  });

  it('can detect density', function() {
    var result = Array2D.dense([
      [1,2,3],
      [4,5],
      [7]
    ]);

    var expected = true;

    assert.strictEqual(result, expected);
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

describe('#tidy', function() {
  it('can tidy up a grid', function() {
    var result = Array2D.tidy([
      [1],
      [1,2,3],
      [1,undefined,null]
    ]);

    var expected = [
      [1,null,null],
      [1,2,3],
      [1,null,null]
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
