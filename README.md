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

## Features / Quick reference

Array2D.js provides the following functions. In general, each accepts an array of arrays (colloquially, a "grid") as the first argument. Arguments that take coordinate parameters receive them in _row, column_ order (i.e., _y, x_). The input array is never modified; all functions whose purpose is to set/change the grid actually return a _new_ grid.

#### Basic

**get:** get a cell's value  
**set:** set a cell's value  
**width:** get the width of the grid (max row)  
**height:** get the height of the grid (max column)  
**dimensions:** get the grid's dimensions (`[width, height]`)  
**area:** get the area of the grid (using width and height)  
**cells:** get the number of cells in the grid  

#### Construction

**clone:** clone the grid  
**build:** create a new grid with the given dimensions  
**buildWith:** create a new grid, using a cell-builder function  
**serialize:** JSON-ify the grid  
**nullify:** convert all cells to `null`  
**integerize:** convert all cells to integers  
**stringize:** convert all cells to strings  
**tidy:** make the grid rectangular; fill missing cells with `null`  

#### Format

**check:** T/F whether the grid is an array of arrays  
**ragged:** T/F whether any rows are different lengths  
**rectangular:** T/F whether all rows are the same length  
**singular:** T/F whether the grid has only one cell  
**multitudinous:** T/F whether the grid has many cells  
**sparse:** T/F whether the grid has any blank cells  
**dense:** T/F whether the grid has no missing (`undefined`) cells  

#### Comparison

**same:** compare two grids cell by cell; T/F if they are the same  
**different:** compare two grids cell by cell; T/F if they are different  

#### Inspection

**empty:** T/F whether the grid has no cells  
**blank:** T/F whether all the grid's cells are `null`/`undefined`  
**contains:** T/F whether the grid has any cell with the given value  

#### Iteration

**eachCell:** iterate over every cell (row-major)  
**nthCell:** iterate over every nth cell (row-major)  
**eachRow:** iterate over every row (row-major)  
**eachColumn:** iterate over every column (column-major)  
**forArea:** iterate over an area within the grid  
**forRow:** iterate over the cells in a row  
**forColumn:** iterate over the cells in a column  

#### Retrieval

**crop:** extract a subgrid of the given dimensions from the grid  
**harvest:** like `crop`, but can overstep the grid's bounds  

#### Rows / columns

**row:** get the row at the given row-coordinate  
**column:** get the column at the given column-coordinate  
**top:** get the top row  
**bottom:** get the bottom row  
**left:** get the left column  
**right:** get the right column  
**widest:** get the widest row  
**thinnest:** get the thinnest row  
**tallest:** get the tallest column  
**shortest:** get the shortest column  
**fillRow:** fill a row with a given value  
**fillColumn:** fill a column with a given value  
**setRow:** set a row to a given array  
**setColumn**  set a column to a given array  
**spliceRow:**  insert a row  
**spliceColumn:**  insert a column  
**deleteRow:** delete a row  
**deleteColumn:** delete a column  

#### Cells

**exists:** T/F whether the cell at coordinates exists (is not `undefined`)  
**occupied:** T/F whether the cell at coordinates has content (is not `null`)  
**inBounds:** T/F/ whether the cell is within the grid's area  
**copy:** copy a cell from one coordinate to another  
**move:** move a cell from one coordinate to another  
**swap:** swap two cells  
**map:** remap the grid into a new grid, cell by cell  

#### Cell location / relationships

**edge:** T/F whether the cell is on an edge  
**edges:** get the list of edges the cell is on  
**corner:** T/F whether the cell is on a corner  
**corners:** get the list of corners the cell is on  
**boundary:** T/F whether the cell is on a boundary (ragged edge)  
**boundaries:** get the list of (ragged) boundaries the cell is on  
**crook:** T/F whether the cell is on a crook (ragged corner)  
**crooks:** get the list of (ragged) corners the cell is on  
**center:** T/F whether the cell is the center cell  
**interior:** T/F whether the cell is in the interior of the grid  
**quadrants:** get the list of coordinate-plane quadrants the cell is within  
**orthogonals:** get all cells orthogonally adjacent to a cell  
**diagonals:** get all cells diagonally adjacent to a cell  
**neighbors:** get all cells adjacent to a cell  
**neighborhood:** extract a 9x9 subgrid centered on the given cell  

#### Cell extras

**euclidean:** get the Euclidean distance between two cells  
**chebyshev:** get the Chebyshev distance between two cells  
**manhattan:** get the Manhattan distance between two cells  

#### Coordinates

_**find:** get a list of the coordinates of all matching cells_  
_**contiguous:** get a list of groups of coordinates of contiguous cells_  
_**touching:** get a list of groups of coordinates of touching cells_  

#### Modification

**rotate:** rotate the grid left/right (also `lrotate`, `rrotate`)  
**flip:** flip the grid vertically/horizontally (also `vflip`, `hflip`)  
**pan:** pan over the grid up/down/left/right (also `upan`, `dpan`, `lpan`, `rpan`)  
**slide:** slide the grid up/down/left/right (also `uslide`, `dslide`, `lslide`, `rslide`)  
**transpose:** transpose the grid (flip over its main diagonal)  
**fill:** fill all the grid's cells with a value  
**fillArea:** fill an area within the grid with a value  
**antitranspose:** flip the grid over its secondary diagonal  
**pad:** add padding to the grid on the top/bottom/left/right (also `upad`, `dpad`, `lpad`, `rpad`)  
**trim:** trim off from the grid's top/bottom/left/right (also `utrim`, `dtrim`, `ltrim`, `rtrim`)  
**stitch:** stitch two grids together (also `ustitch`, `dstitch`, `lstitch`, `rstitch`)  
**paste:** paste a grid within another grid, at the given coordinates  
**glue:** glue two grids together, at the given coordinates  
**shuffle:** rearrange the grid's cells randomly  

#### Conversion / reduction

**flatten:** convert the grid to a flat, row-major array  
**squash:** convert the grid to a flat, column-major array  
**reduce:** reduce the grid to a flat array, row-by-row  
**boildown:** reduce the grid to a flat array, column-by-column  

#### Analysis

**symmetrical:** T/F whether the grid is symmetrical (over the y- or x-axis)  
_**includes:** T/F whether the grid contains another grid_  

#### Import / export

**fromArray:** build a grid of the given dimensions from a flat array  
**fromCanvas:** convert a `<canvas>` pixel data into a grid  
**toCanvas:** draw a grid onto a `<canvas>`  

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
