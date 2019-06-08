let Array2D = require("./../Array2D");
let assert = require("assert");

describe("#check", function() {
  it("can detect a valid grid", function() {
    let result = Array2D.check([[1, 2, 3]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect an invalid grid", function() {
    const result = Array2D.check(["I am just a flat array"]);

    const expected = false;

    assert.strictEqual(result, expected);
  });
});

describe("#ragged", function() {
  it("can detect a ragged grid", function() {
    const result = Array2D.ragged([[1, 2, 3], [1, 2], [1]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect a non-ragged grid", function() {
    const result = Array2D.ragged([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });
});

describe("#rectangular", function() {
  it("can detect a rectangular grid", function() {
    const result = Array2D.rectangular([[1, 2, 3], [1, 2], [1]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });

  it("can detect a non-rectangular grid", function() {
    const result = Array2D.rectangular([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });
});

describe("#empty", function() {
  it("can detect whether a grid is empty", function() {
    const result = Array2D.empty([]);

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can detect whether a grid is empty", function() {
    const result = Array2D.empty([[]]);

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can detect whether a grid is not empty", function() {
    const result = Array2D.empty([[1]]);

    const expected = false;

    assert.strictEqual(expected, result);
  });
});

describe("#blank", function() {
  it("can detect whether a grid is blank", function() {
    const result = Array2D.blank([[null, null, null, undefined]]);

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can detect whether a grid is blank", function() {
    const result = Array2D.blank([[undefined]]);

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can detect whether a grid is not blank", function() {
    const result = Array2D.blank([[null, null, 0]]);

    const expected = false;

    assert.strictEqual(expected, result);
  });

  it("can detect whether a grid is not blank", function() {
    const result = Array2D.blank([[null, false, null]]);

    const expected = false;

    assert.strictEqual(expected, result);
  });
});

describe("#singular", function() {
  it("can detect a grid with only one cell", function() {
    const result = Array2D.singular([[1]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect a grid with multiple cells", function() {
    const result = Array2D.singular([[1, 2]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });
});

describe("#multitudinous", function() {
  it("can detect a grid with multiple cells", function() {
    const result = Array2D.multitudinous([[1, 2]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect a grid with only one cells", function() {
    const result = Array2D.multitudinous([[1]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });
});

describe("#sparse", function() {
  it("can detect lack of sparsity", function() {
    const result = Array2D.sparse([[1, 2, 3], [4, 5], [6, 7]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });

  it("can detect sparsity via nulls", function() {
    const result = Array2D.sparse([[1, 2, 3], [4, 5, null], [6, 7]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect sparsity via undefineds", function() {
    const result = Array2D.sparse([[1, 2, 3], [4, 5], [undefined, 7]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });
});

describe("#dense", function() {
  it("can detect lack of density via nulls", function() {
    const result = Array2D.dense([[1, 2, 3], [4, 5], [null, 6, 7]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });

  it("can detect lack of density via undefineds", function() {
    const result = Array2D.dense([[1, 2, 3], [4, 5, undefined], [6, 7]]);

    const expected = false;

    assert.strictEqual(result, expected);
  });

  it("can detect density", function() {
    const result = Array2D.dense([[1, 2, 3], [4, 5], [7]]);

    const expected = true;

    assert.strictEqual(result, expected);
  });
});

describe("#same", function() {
  it("can tell if two grids are the same", function() {
    const result = Array2D.same(
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],

      [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    );

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can tell if two grids are not the same", function() {
    const result = Array2D.same(
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],

      [[1, 2, 3], [4, 5, 6], [7, 8, 0]]
    );

    const expected = false;

    assert.strictEqual(expected, result);
  });
});

describe("#different", function() {
  it("can tell if two grids are different", function() {
    const result = Array2D.different(
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],

      [[1, 2, 3], [4, 5, 6], [7, 8, 0]]
    );

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can tell if two grids are not different", function() {
    const result = Array2D.different(
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],

      [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    );

    const expected = false;

    assert.strictEqual(expected, result);
  });
});

describe("#diff", function() {
  it("can find coordinates of differing cells", function() {
    const result = Array2D.diff(
      [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
    );

    const expected = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe("#contains", function() {
  it("can detect whether a grid contains a value", function() {
    const result = Array2D.contains([[1, 2, 3], [4, 5, 6], [7, 888, 9]], 888);

    const expected = true;

    assert.strictEqual(expected, result);
  });

  it("can detect whether a grid does not contain a value", function() {
    const result = Array2D.contains([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 888);

    const expected = false;

    assert.strictEqual(expected, result);
  });
});

describe("#includes", function() {
  it("can detect if a grid includes another I", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[7, 8], [2, 3]]
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid includes another II (ragged)", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[7, 8, 9, 0], [2, 3]]
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid includes another III", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[9, 0], [4, 5]]
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid includes another IV", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[7, 8, 9, 0], [2, 3, 4, 5], [7, 8, 9, 0], [2, 3, 4, 5]]
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid includes another V (ragged)", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[7, 8, 9, 0], [2, 3, 4, 5], [7, 8, 9, 0], [2, 3, 4]]
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid includes another VI (ragged)", function() {
    const result = Array2D.includes(
      [[1, 2, 3, 4, 5], [6, 7, 8, 9], [1, 2, 3], [6, 7], [1]],
      [[7, 8, 9], [2], [7]]
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid does not include another I", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[9, 0, 1], [4, 5, 1], [1, 1, 1]]
    );

    const expected = false;

    assert.strictEqual(result, expected);
  });

  it("can detect if a grid does not include another II", function() {
    const result = Array2D.includes(
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0],
        [1, 2, 3, 4, 5]
      ],
      [[7, 9], [2, 3]]
    );

    const expected = false;

    assert.strictEqual(result, expected);
  });
});

describe("#symmetrical", function() {
  it("can detect symmetry over the y-axis", function() {
    const result = Array2D.symmetrical(
      [
        [1, 2, 3, 3, 2, 1],
        [4, 5, 6, 6, 5, 4],
        [9, 9, 1, 1, 9, 9],
        [4, 6, 4, 4, 6, 4],
        [5, 5, 5, 5, 5, 5]
      ],
      Array2D.AXES.Y
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect symmetry over the x-axis", function() {
    const result = Array2D.symmetrical(
      [
        [1, 1, 5, 6, 0, 4],
        [1, 2, 0, 7, 0, 3],
        [2, 3, 5, 8, 0, 2],
        [2, 3, 5, 8, 0, 2],
        [1, 2, 0, 7, 0, 3],
        [1, 1, 5, 6, 0, 4]
      ],
      Array2D.AXES.X
    );

    const expected = true;

    assert.strictEqual(result, expected);
  });
});

describe("#hsymmetrical", function() {
  it("can detect horizontal symmetry", function() {
    const result = Array2D.hsymmetrical([
      [1, 2, 3, 3, 2, 1],
      [4, 5, 6, 6, 5, 4],
      [9, 9, 1, 1, 9, 9],
      [4, 6, 4, 4, 6, 4],
      [5, 5, 5, 5, 5, 5]
    ]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect horizontal non-symmetry", function() {
    const result = Array2D.hsymmetrical([
      [1, 2, 3, 3, 2, 1],
      [4, 5, 6, 6, 5, 4],
      [9, 9, 1, 1, 9, 9],
      [4, 6, 4, 4, 7, 4],
      [5, 5, 5, 5, 5, 5]
    ]);

    const expected = false;

    assert.strictEqual(result, expected);
  });
});

describe("#vsymmetrical", function() {
  it("can detect vertical symmetry", function() {
    const result = Array2D.vsymmetrical([
      [1, 1, 5, 6, 0, 4],
      [1, 2, 0, 7, 0, 3],
      [2, 3, 5, 8, 0, 2],
      [2, 3, 5, 8, 0, 2],
      [1, 2, 0, 7, 0, 3],
      [1, 1, 5, 6, 0, 4]
    ]);

    const expected = true;

    assert.strictEqual(result, expected);
  });

  it("can detect vertical non-symmetry", function() {
    const result = Array2D.vsymmetrical([
      [1, 1, 5, 6, 0, 4],
      [1, 2, 0, 7, 0, 3],
      [2, 3, 5, 8, 0, 2],
      [2, 3, 5, 8, 0, 2],
      [1, 2, 0, 7, 1, 3],
      [1, 1, 5, 6, 0, 4]
    ]);

    const expected = false;

    assert.strictEqual(result, expected);
  });
});
