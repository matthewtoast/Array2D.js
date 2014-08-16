# Array2D.js

Array2D.js is a utility library for working with 2D arrays (arrays of arrays) in JavaScript. It provides a suite of functions that make it simple to manipulate these grid-like data structures. Array2D.js is small, standalone (no external dependencies), fully tested, and ready for use in Node.js or the browser.

## Example

Here's a quick usage example, to give a sense of Array2D.js' style.

    var grid = [[1,2,3], [4,5,6], [7,8,9]];
    var result = Array2D.swap(Array2D.transpose(grid), 1,1, 2,2);
    console.log(result);
    // => [[1,4,7],[2,9,8],[3,6,5]]

And here's an illustration of the above operations:

    1 2 3                1 4 7                            1 4 7
    4 5 6  transpose ~>  2 5 8  swap (1,1) with (2,2) ~>  2 9 8
    7 8 9                3 6 9                            3 6 5

## Reference

For complete documentation, please see the [API reference](REFERENCE.md).

## Installation

You can install via npm:

    npm install array2d

Or via Bower:

    bower install Array2D  

Or simply download the [minified source](dist/Array2D.min.js).

## Development

Pull requests are welcome.

## Testing

Run the tests with:

    $ mocha test

## Benchmarks

Run the benchmarks with:

    $ node perf/general

See previous results in `perf/RESULTS.md`.

## Author

[Matthew Trost](http://trost.co)

## Copyright

Copyright (c) 2014 Matthew Trost

## License

MIT. See [LICENSE.txt](LICENSE.txt) in this folder.
