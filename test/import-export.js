var Array2D = require('./../Array2D');
var assert = require('assert');

describe('#fromArray', function() {
  it('can convert an array to a grid', function() {
    var result = Array2D.fromArray([1,2,3,4,5,6,7,8,9], 3, 3);
    var expected = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
  });
});

// TODO: A good test for #toCanvas

// TODO: A good test for #fromCanvas
