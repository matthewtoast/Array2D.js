# Array2D.js

Array2D.js is a utility library for working with 2D arrays (arrays of arrays) in JavaScript. It provides a suite of 100-odd functions that make it simple to manipulate these grid-like data structures. It includes the essential tools you would expect, such as `crop`, `rotate`, and `transpose`, as well as a slew of more specialized helpers. Array2D.js is small, standalone (no external dependencies), fully tested, and ready for use in Node.js or the browser.

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

## Demo

See the [unsophisticated demo page](http://matthewtoast.github.io/Array2D.js/demo/).

## Features / Quick reference

Array2D.js provides the following functions. In general, each accepts an array of arrays (colloquially, a "grid") as the first argument. Arguments that take coordinate parameters receive them in _row, column_ order (i.e., _y, x_). The input array is never modified; all functions whose purpose is to set/change the grid actually return a _new_ grid.

#### Basic

**get:** Get a cell's value  
**set:** Set a cell's value  
**width:** Get the width of the grid (max row)  
**height:** Get the height of the grid (max column)  
**dimensions:** Get the grid's dimensions (`[width, height]`)  
**area:** Get the area of the grid (using width and height)  
**cells:** Get the number of cells in the grid  

#### Essentials  

**crop:** Extract a subgrid of the given dimensions from the grid  
**harvest:** Like `crop`, but can overstep the grid's bounds  
**rotate:** Rotate the grid left/right (also `lrotate`, `rrotate`)  
**flip:** Flip the grid vertically/horizontally (also `vflip`, `hflip`)  
**pan:** Pan over the grid up/down/left/right (also `upan`, `dpan`, `lpan`, `rpan`)  
**slide:** Slide the grid up/down/left/right (also `uslide`, `dslide`, `lslide`, `rslide`)  
**transpose:** Transpose the grid (flip over its main diagonal)  
**antitranspose:** Flip the grid over its _secondary_ diagonal  
**fill:** Fill all the grid's cells with a value  
**fillArea:** Fill an area within the grid with a value  
**pad:** Add padding to the grid on the top/bottom/left/right (also `upad`, `dpad`, `lpad`, `rpad`)  
**trim:** Trim off from the grid's top/bottom/left/right (also `utrim`, `dtrim`, `ltrim`, `rtrim`)  
**stitch:** Stitch two grids together (also `ustitch`, `dstitch`, `lstitch`, `rstitch`)  
**paste:** Paste a grid within another grid, at the given coordinates  
**glue:** Glue two grids together, at the given coordinates  
**shuffle:** Rearrange the grid's cells randomly  
**tidy:** Make the grid rectangular; fill missing cells with `null`  

#### Construction / casting

**clone:** Clone (create a new copy of) the grid  
**build:** Create a new grid with the given dimensions  
**buildWith:** Create a new grid, using a cell-builder function  
**serialize:** JSON-ify the grid  
**nullify:** Convert all cells to `null`  
**integerize:** Convert all cells to integers  
**stringize:** Convert all cells to strings  

#### Inspection / comparison / analysis

**check:** T/F whether the grid is an array of arrays  
**ragged:** T/F whether any rows are different lengths  
**rectangular:** T/F whether all rows are the same length  
**empty:** T/F whether the grid has no cells  
**blank:** T/F whether all the grid's cells are `null`/`undefined`  
**singular:** T/F whether the grid has only one cell  
**multitudinous:** T/F whether the grid has many cells  
**sparse:** T/F whether the grid has any blank cells  
**dense:** T/F whether the grid has no missing (`undefined`) cells  
**same:** Compare two grids cell by cell; T/F if they are the same  
**different:** Compare two grids cell by cell; T/F if they are different  
**diff:** Return the coordinates of cells that are different between two grids  
**contains:** T/F whether the grid has any cell with the given value  
**includes:** T/F/ whether the grid contains another grid  
**symmetrical:** T/F whether the grid is symmetrical (also `hsymmetrical`, `vsymmetrical`)

#### Iteration / collection

**eachCell:** Iterate over every cell (row-major)  
**nthCell:** Iterate over every nth cell (row-major)  
**eachRow:** Iterate over every row (row-major)  
**eachColumn:** Iterate over every column (column-major)  
**forArea:** Iterate over an area within the grid  
**forRow:** Iterate over the cells in a row  
**forColumn:** Iterate over the cells in a column  
**flatten:** Convert the grid to a flat, row-major array  
**squash:** Convert the grid to a flat, column-major array  
**map:** Remap the grid into a new grid, cell by cell  
**reduce:** Reduce the grid to a flat array, row-by-row  
**boildown:** Reduce the grid to a flat array, column-by-column  

#### Rows / columns

**row:** Get the row at the given row-coordinate  
**column:** Get the column at the given column-coordinate  
**top:** Get the top row  
**bottom:** Get the bottom row  
**left:** Get the left column  
**right:** Get the right column  
**widest:** Get the widest row  
**thinnest:** Get the thinnest row  
**tallest:** Get the tallest column  
**shortest:** Get the shortest column  
**setRow:** Set a row to a given array  
**setColumn** Set a column to a given array  
**fillRow:** Fill a row with a given value  
**fillColumn:** Fill a column with a given value  
**spliceRow:** Insert a row  
**spliceColumn:** Insert a column  
**deleteRow:** Delete a row  
**deleteColumn:** Delete a column  

#### Cells

**exists:** T/F whether the cell at coordinates exists (is not `undefined`)  
**occupied:** T/F whether the cell at coordinates has content (is not `null`)  
**inBounds:** T/F/ whether the cell is within the grid's area  
**copy:** Copy a cell from one coordinate to another  
**move:** Move a cell from one coordinate to another  
**swap:** Swap two cells  

#### Location / relationships

**edge:** T/F whether the cell is on an edge  
**edges:** Get the list of edges the cell is on  
**corner:** T/F whether the cell is on a corner  
**corners:** Get the list of corners the cell is on  
**boundary:** T/F whether the cell is on a boundary (ragged edge)  
**boundaries:** Get the list of (ragged) boundaries the cell is on  
**crook:** T/F whether the cell is on a crook (ragged corner)  
**crooks:** Get the list of (ragged) corners the cell is on  
**center:** T/F whether the cell is the center cell  
**interior:** T/F whether the cell is in the interior of the grid  
**quadrants:** Get the list of coordinate-plane quadrants the cell is within  
**orthogonals:** Get all cells orthogonally adjacent to a cell  
**diagonals:** Get all cells diagonally adjacent to a cell  
**neighbors:** Get all cells adjacent to a cell  
**neighborhood:** Extract a 9x9 subgrid centered on the given cell  
**euclidean:** Get the Euclidean distance between two cells  
**chebyshev:** Get the Chebyshev distance between two cells  
**manhattan:** Get the Manhattan distance between two cells  

#### Coordinates

**find:** Get a list of the coordinates of all matching cells  
**contiguous:** Get a list of groups of coordinates of contiguous cells  
**touching:** Get a list of groups of coordinates of touching cells  
**surrounds:** Get a list of coordinates of a cell's surrounding cells  

#### Import / export

**fromArray:** Build a grid of the given dimensions from a flat array  
**fromCanvas:** Convert a `<canvas>` pixel data into a grid  
**toCanvas:** Draw a grid onto a `<canvas>`  

## Reference

For complete documentation, please see the [API reference](REFERENCE.md).

## Installation

You can install via npm:

    npm install array2d

Or via Bower:

    bower install array2d

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
