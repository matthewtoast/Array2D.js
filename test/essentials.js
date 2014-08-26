var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#crop', function() {
  it('can crop an internal grid', function() {
    var result = Array2D.crop([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 2, 2);

    var expected = [
      [5,6],
      [8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
  });

  it('does not crop out-of-bounds', function() {
    var result = Array2D.crop([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 3, 3);

    var expected = [
      [5,6],
      [8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], undefined);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], undefined);
    assert.strictEqual(expected[2], undefined);
  });

  it('does not crop with negative indices', function() {
    var result = Array2D.crop([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], -1, -1, 3, 3);

    var expected = [
      [1,2],
      [4,5]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[0][2], undefined);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
    assert.strictEqual(expected[1][2], undefined);
    assert.strictEqual(expected[2], undefined);
  });
});

describe('#harvest', function() {
  it('can harvest an internal grid', function() {
    var result = Array2D.harvest([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 2, 2);

    var expected = [
      [5,6],
      [8,9]
    ];

    assert.strictEqual(expected[0][0], result[0][0]);
    assert.strictEqual(expected[0][1], result[0][1]);
    assert.strictEqual(expected[1][0], result[1][0]);
    assert.strictEqual(expected[1][1], result[1][1]);
  });

  it('can harvest an out-of-bounds grid', function() {
    var result = Array2D.harvest([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 1, 1, 3, 3);

    var expected = [
      [5,6,null],
      [8,9,null],
      [null,null,null]
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

  it('can harvest with negative indices', function() {
    var result = Array2D.harvest([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], -1, -1, 3, 3);

    var expected = [
      [null,null,null],
      [null,1,2],
      [null,4,5]
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

describe('#rotate', function() {
  it('can rotate in the left direction', function() {
    var result = Array2D.rotate([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.LEFT);

    var expected = [
      [3,6,9],
      [2,5,8],
      [1,4,7]
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

  it('can rotate in the right direction', function() {
    var result = Array2D.rotate([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.RIGHT);

    var expected = [
      [7,4,1],
      [8,5,2],
      [9,6,3]
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

describe('#lrotate', function() {
  it('can rotate the grid left', function() {
    var result = Array2D.lrotate([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [3,6,9],
      [2,5,8],
      [1,4,7]
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

describe('#rrotate', function() {
  it('can rotate the grid right', function() {
    var result = Array2D.rrotate([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [7,4,1],
      [8,5,2],
      [9,6,3]
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

describe('#flip', function() {
  it('can flip a grid about the horizontal axis', function() {
    var result = Array2D.flip([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.AXES.X);

    var expected = [
      [7,8,9],
      [4,5,6],
      [1,2,3]
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

  it('can flip a grid about the vertical axis', function() {
    var result = Array2D.flip([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.AXES.Y);

    var expected = [
      [3,2,1],
      [6,5,4],
      [9,8,7]
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

describe('#vflip', function() {
  it('can vertically flip a grid', function() {
    var result = Array2D.vflip([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [7,8,9],
      [4,5,6],
      [1,2,3]
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

describe('#hflip', function() {
  it('can horizontally flip a grid', function() {
    var result = Array2D.hflip([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [3,2,1],
      [6,5,4],
      [9,8,7]
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

describe('#pan', function() {
  it('can pan a grid up', function() {
    var result = Array2D.pan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.UP);

    var expected = [
      [7,8,9],
      [1,2,3],
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

  it('can pan a grid down', function() {
    var result = Array2D.pan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.DOWN);

    var expected = [
      [4,5,6],
      [7,8,9],
      [1,2,3]
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

  it('can pan a grid left', function() {
    var result = Array2D.pan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.LEFT);

    var expected = [
      [3,1,2],
      [6,4,5],
      [9,7,8]
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

  it('can pan a grid right', function() {
    var result = Array2D.pan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.RIGHT);

    var expected = [
      [2,3,1],
      [5,6,4],
      [8,9,7]
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

describe('#upan', function() {
  it('can pan a grid up once', function() {
    var result = Array2D.upan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [7,8,9],
      [1,2,3],
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

  it('can pan a grid up multiple times', function() {
    var result = Array2D.upan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [4,5,6],
      [7,8,9],
      [1,2,3]
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

describe('#dpan', function() {
  it('can pan a grid down once', function() {
    var result = Array2D.dpan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [4,5,6],
      [7,8,9],
      [1,2,3]
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

  it('can pan a grid down multiple times', function() {
    var result = Array2D.dpan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [7,8,9],
      [1,2,3],
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

describe('#lpan', function() {
  it('can pan a grid left once', function() {
    var result = Array2D.lpan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [3,1,2],
      [6,4,5],
      [9,7,8]
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

  it('can pan a grid left multiple times', function() {
    var result = Array2D.lpan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [2,3,1],
      [5,6,4],
      [8,9,7]  
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

describe('#rpan', function() {
  it('can pan a grid right once', function() {
    var result = Array2D.rpan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [2,3,1],
      [5,6,4],
      [8,9,7]
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

  it('can pan a grid right multiple times', function() {
    var result = Array2D.rpan([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [3,1,2],
      [6,4,5],
      [9,7,8]  
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

describe('#slide', function() {
  it('can slide a grid up', function() {
    var result = Array2D.slide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.UP);

    var expected = [
      [4,5,6],
      [7,8,9],
      [1,2,3]
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

  it('can slide a grid down', function() {
    var result = Array2D.slide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.DOWN);

    var expected = [
      [7,8,9],
      [1,2,3],
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

  it('can slide a grid left', function() {
    var result = Array2D.slide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.LEFT);

    var expected = [
      [2,3,1],
      [5,6,4],
      [8,9,7]
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

  it('can slide a grid right', function() {
    var result = Array2D.slide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.DIRECTIONS.RIGHT);

    var expected = [
      [3,1,2],
      [6,4,5],
      [9,7,8]
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

describe('#uslide', function() {
  it('can slide a grid up once', function() {
    var result = Array2D.uslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [4,5,6],
      [7,8,9],
      [1,2,3]
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

  it('can slide a grid up multiple times', function() {
    var result = Array2D.uslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [7,8,9],
      [1,2,3],
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

describe('#dslide', function() {
  it('can slide a grid down once', function() {
    var result = Array2D.dslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [7,8,9],
      [1,2,3],
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

  it('can slide a grid down multiple times', function() {
    var result = Array2D.dslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [4,5,6],
      [7,8,9],
      [1,2,3]
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

describe('#lslide', function() {
  it('can slide a grid left once', function() {
    var result = Array2D.lslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [2,3,1],
      [5,6,4],
      [8,9,7]
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

  it('can slide a grid left multiple times', function() {
    var result = Array2D.lslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [3,1,2],
      [6,4,5],
      [9,7,8]  
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

describe('#rslide', function() {
  it('can slide a grid right once', function() {
    var result = Array2D.rslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [3,1,2],
      [6,4,5],
      [9,7,8]
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

  it('can slide a grid right multiple times', function() {
    var result = Array2D.rslide([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2);

    var expected = [
      [2,3,1],
      [5,6,4],
      [8,9,7]
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

describe('#transpose', function() {
  it('can transpose a grid', function() {
    var result = Array2D.transpose([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [1,4,7],
      [2,5,8],
      [3,6,9]
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

  it('can transpose a *ragged* grid', function() {
    var result = Array2D.transpose([
      [1,2,3,4,5],
      [6,7],
      [8,9,0,1]
    ]);

    var expected = [
      [1,6,8],
      [2,7,9],
      [3,undefined,0],
      [4,undefined,1],
      [5]
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
    assert.strictEqual(expected[3][0], result[3][0]);
    assert.strictEqual(expected[3][1], result[3][1]);
    assert.strictEqual(expected[3][2], result[3][2]);
    assert.strictEqual(expected[4][0], result[4][0]);
    assert.strictEqual(expected[4][1], result[4][1]);
    assert.strictEqual(expected[4][2], result[4][2]);
  });
});

describe('#antitranspose', function() {
  it('can "antitranspose" a grid', function() {
    var result = Array2D.antitranspose([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [9,6,3],
      [8,5,2],
      [7,4,1]
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

describe('#fill', function() {
  it('can fill a grid', function() {
    var result = Array2D.fill([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 'x');

    var expected = [
      ['x','x','x'],
      ['x','x','x'],
      ['x','x','x']
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#fillArea', function() {
  it('can fill an area', function() {
    var result = Array2D.fillArea([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 0, 0, 2, 2, 'x');

    var expected = [
      ['x','x',3],
      ['x','x',6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#pad', function() {
  it('can pad the top of a grid', function() {
    var result = Array2D.upad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      ['x','x','x'],
      ['x','x','x'],
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });

  it('can pad the bottom of a grid', function() {
    var result = Array2D.dpad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      ['x','x','x'],
      ['x','x','x']
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });

  it('can pad the left of a grid', function() {
    var result = Array2D.lpad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      ['x','x',1,2,3],
      ['x','x',4,5,6],
      ['x','x',7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });

  it('can pad the right of a grid', function() {
    var result = Array2D.rpad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      [1,2,3,'x','x'],
      [4,5,6,'x','x'],
      [7,8,9,'x','x']
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#upad', function() {
  it('can pad the top of a grid', function() {
    var result = Array2D.upad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      ['x','x','x'],
      ['x','x','x'],
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#dpad', function() {
  it('can pad the bottom of a grid', function() {
    var result = Array2D.dpad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      ['x','x','x'],
      ['x','x','x']
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#lpad', function() {
  it('can pad the left of a grid', function() {
    var result = Array2D.lpad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      ['x','x',1,2,3],
      ['x','x',4,5,6],
      ['x','x',7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#rpad', function() {
  it('can pad the left of a grid', function() {
    var result = Array2D.rpad([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], 2, 'x');

    var expected = [
      [1,2,3,'x','x'],
      [4,5,6,'x','x'],
      [7,8,9,'x','x']
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#trim', function() {
  it('can trim off the top side of the grid', function() {
    var result = Array2D.trim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.EDGES.TOP);

    var expected = [
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it('can trim off bottom the side of the grid', function() {
    var result = Array2D.trim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.EDGES.BOTTOM);

    var expected = [
      [1,2,3],
      [4,5,6]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it('can trim off the left side of the grid', function() {
    var result = Array2D.trim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.EDGES.LEFT);

    var expected = [
      [2,3],
      [5,6],
      [8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it('can trim off the right side of the grid', function() {
    var result = Array2D.trim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ], Array2D.EDGES.RIGHT);

    var expected = [
      [1,2],
      [4,5],
      [7,8]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#utrim', function() {
  it('can trim off the top side of the grid', function() {
    var result = Array2D.utrim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#utrim', function() {
  it('can trim off bottom the side of the grid', function() {
    var result = Array2D.dtrim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [1,2,3],
      [4,5,6]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#ltrim', function() {
  it('can trim off the left side of the grid', function() {
    var result = Array2D.ltrim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [2,3],
      [5,6],
      [8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#rtrim', function() {
  it('can trim off the right side of the grid', function() {
    var result = Array2D.rtrim([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    var expected = [
      [1,2],
      [4,5],
      [7,8]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#stitch', function() {
  it('can stitch to top the of a grid', function() {
    var result = Array2D.ustitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ], Array2D.EDGES.TOP);

    var expected = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it('can stitch to bottom the of a grid', function() {
    var result = Array2D.stitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ], Array2D.EDGES.BOTTOM);

    var expected = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it('can stitch to the left side of a grid', function() {
    var result = Array2D.stitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ], Array2D.EDGES.LEFT);

    var expected = [
      [0,0,0,1,2,3],
      [0,0,0,4,5,6],
      [0,0,0,7,8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });

  it('can stitch to the right side of a grid', function() {
    var result = Array2D.stitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ], Array2D.EDGES.RIGHT);

    var expected = [
      [1,2,3,0,0,0],
      [4,5,6,0,0,0],
      [7,8,9,0,0,0]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#ustitch', function() {
  it('can stitch to top the of a grid', function() {
    var result = Array2D.ustitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]);

    var expected = [
      [0,0,0],
      [0,0,0],
      [0,0,0],
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#dstitch', function() {
  it('can stitch to bottom the of a grid', function() {
    var result = Array2D.dstitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]);

    var expected = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#lstitch', function() {
  it('can stitch to the left side of a grid', function() {
    var result = Array2D.lstitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]);

    var expected = [
      [0,0,0,1,2,3],
      [0,0,0,4,5,6],
      [0,0,0,7,8,9]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#rstitch', function() {
  it('can stitch to the right side of a grid', function() {
    var result = Array2D.rstitch([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]);

    var expected = [
      [1,2,3,0,0,0],
      [4,5,6,0,0,0],
      [7,8,9,0,0,0]
    ];

    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

describe('#paste', function() {
  it('can paste a grid onto another', function() {
    var result = Array2D.paste([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], 1, 1);

    var expected = [
      [1,2,3],
      [4,'a','b'],
      [7,'d','e']
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

  it('can paste a grid onto another with negative start coords', function() {
    var result = Array2D.paste([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], -1, -1);

    var expected = [
      ['e','f',3],
      ['h','i',6],
      [7,8,9]
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

describe('#glue', function() {
  it('can glue a grid onto another', function() {
    var result = Array2D.glue([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], -3, -3);

    var expected = [
      ['a','b','c',null,null,null],
      ['d','e','f',null,null,null],
      ['g','h','i',null,null,null],
      [null,null,null,1,2,3],
      [null,null,null,4,5,6],
      [null,null,null,7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });

  it('can glue a grid onto another II', function() {
    var result = Array2D.glue([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], -2, -2);

    var expected = [
      ['a','b','c',null,null],
      ['d','e','f',null,null],
      ['g','h','i',2,3],
      [null,null,4,5,6],
      [null,null,7,8,9]
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });

  it('can glue a grid onto another III', function() {
    var result = Array2D.glue([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], 4, 4);

    var expected = [
      [1,2,3,null,null,null,null],
      [4,5,6,null,null,null,null],
      [7,8,9,null,null,null,null],
      [null,null,null,null,null,null,null],
      [null,null,null,null,'a','b','c'],
      [null,null,null,null,'d','e','f'],
      [null,null,null,null,'g','h','i'],
    ];

    assert.strictEqual(JSON.stringify(expected), JSON.stringify(result));
  });
});

describe('#shuffle', function() {
  it('can shuffle a grid', function() {
    var result = Array2D.shuffle([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    // Not a great check for validity, but...
    assert.strictEqual(result[0].length, 3);
    assert.strictEqual(result[0].length, 3);
    assert.strictEqual(result[0].length, 3);
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
