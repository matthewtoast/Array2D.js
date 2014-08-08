# Array2D.js Documentation

Array2D.js is a utility library for working with two-dimensional arrays (arrays of arrays) in JavaScript. It's useful when manipulating data that represents a two-dimensional grid, that is, a collection of rows.

## Terminology

For simplicity's sake, in the documentation below, we'll use the term "grid" and/or the variable name `grid` to refer to an array of arrays, where the elements of the inner arrays are thought of as the values of the grid's cells. Here's an example "grid":

    [[1,2,'h'],
     [null,1],
     [1,3,4,5]]

Note that the only qualification for being a grid is that the object be an array whose elements are arrays. The inner arrays ("rows") can be of different lengths, and the elements can be of any type.

`null` is used to represent blank cells -- that is, cells that exist in the grid but which have no content. `undefined`, on the other hand, is used in cases when a cell outside of the grid's bounds is accessed.

## Overview

Each of Array2D's functions are static, and available from the `Array2D` namespace. Unless specified otherwise, all functions accept a grid as the first argument and return a new grid, without modifying the original.

## Reference

### Basic

**get(grid, r, c)**

Return the value for the cell at row-column coordinate `r`, `c`.

**set(grid, r, c, value)**

Set the value for the cell at row-column coordinate `r`, `c` to the value `value`. (Reminder: This and other "setter" operations return a new grid; the original is not modified.)

**width(grid)**

Return the width of the grid (number of colums). If the rows are ragged, return the length of the longest row.

**height(grid)**

Return the height of the grid (number of rows).

**area(grid)**

Return the area (`width * height`) of the grid. If the rows are ragged, the length of the longest row is used as the width value.

**cells(grid)**

Return the total number of cells in the grid. (Note the difference between this and the `area` function.) `null` cells are counted, but `undefined` cells are not.

### Construction / destruction

**clone(grid)**

Return a clone of the grid.

**build(w, h, [value])**

Initialize a new grid of the desired width `w` (columns) and height `h` (rows). If `value` is passed, set every cell to that value; otherwise set to `null`.

**serialize(aa)**

Return a JSON string of the grid. (Note that `JSON.stringify` either omits or converts to `null` any functions, symbols, or `undefined` values.)

**nullify(grid)**

Return a new grid with the same dimensions, but with all cells converted to `null`.

### Format

**check(o)**

Return `true` if the object `o` is a valid grid, i.e., an array of arrays. Otherwise `false`.

**ragged(grid)**

Return `true` if the grid is ragged, i.e., contains rows of differing lengths. Otherwise `false`.

**rectangular(grid)**

Opposite of `ragged`.

**singular(grid)**

Return `true` if the grid has only one cell.

**multitudinous(grid)**

Return `true` if the grid has more than one cell.

**sparse(grid)**

Returns `true` if the grid has any `null` or `undefined` cells. Otherwise `false`.

**dense(grid)**

Opposite of `sparse`.

**integerize(grid)**

Return a new grid with the same dimensions, but with all cell values converted to integers. (Note that `parseInt()` can return `NaN` for some values.)

**stringize(grid)**

Return a new grid with the same dimensions, but with all cell values cast to strings.

**tidy(grid)**

Return a tidied-up clone of the grid. Ragged rows are padded with `null` cells until they meet the length of the longest row. `undefined` cells are replaced with `null`. This operation starts at the leftmost element and pushes out to the right (i.e., rows are assumed to be left-aligned).

### Comparison

**same(grid1, grid2)**

Return `true` if every cell value in the first grid is equal to the respective cell in the second grid. Otherwise `false`. The cell-comparison is done using the strict equality operator (`===`).

**different(grid1, grid2)**

Opposite of `same`.

### Inclusion

**empty(grid)**

Returns `true` if the grid has no cells. Otherwise `false`. (Here, `[]` and `[[]]` would return `true`; `[[1]]` would return `false`.)

**blank(grid)**

Returns `true` if all of the grid's cells are `null` or `undefined`, _or_ if the grid has no cells (using `empty`). Otherwise `false`.

**contains(grid, value)**

Returns `true` if any cell in the grid matches the value `value` using the strict equality operator (`===`). Otherwise `false`.

### Iteration

**eachCell(grid, iterator)**

Iterate over every cell in the grid, in row-major order. Pass each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

**nthCell(grid, n, s, iterator)**

Iterate over every "nth" cell in the grid, using `n` as the step value, and `s` as the index of the starting cell (row-major). Pass each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

For a simple illustration, the cells marked `x` would be returned if `nthCell()` were called with `n = 2` and `s = 0`:

    [[x, _, x],
     [_, x, _],
     [x, _, x]]

**eachRow(grid, iterator)**

Iterate over every row in the grid, in row-major order. Pass each row-array to the `iterator`, a function with signature `iterator(row, r, grid)`, where `row` is the row-array, `r` is the row-index, and `grid` is the original grid.

**eachColumn(grid, iterator)**

Iterate over every column in the grid, in column-major order. Pass each column-array to the `iterator`, a function with signature `iterator(column, c, grid)`, where `column` is the column-array, `c` is the column-index, and `grid` is the original grid.

### Retrieval

**crop(grid, r, c, width, height)**

Return a section of the grid, going from the row-column coordinates `r`, `c` and out to the specified `width` and `height`. If the specified dimensions go out of the grid's bounds, only the part of the original grid that contains content will be returned.

**harvest(grid, r, c, width, height)**

Similar to `crop`, except that if the selected region goes beyond the grid's bounds, the returned grid will be the specified size, padded with `null` cells. This function also supports negative row-column indices.

### Rows / columns

**top(grid)**

Return the first row-array of the grid as a _flat array_.

**bottom(grid)**

Return the last row-array of the grid as a _flat array_.

**left(grid)**

Return the first (column-major) column-array of the grid as a _flat array_.

**right(grid)**

Return the last (column-major) column-array of the grid as a _flat array_.

**widest(grid)**

Return the longest _row_ of the grid, or the last row if all are the same length.

**thinnest(grid)**

Return the shortest _row_ of the grid, or the last row if all are the same length.

**tallest(grid)**

Return the longest _column_ of the grid, or the last column if all are the same length.

**shortest(grid)**

Return the shortest _column_ of the grid, or the last column if all are the same length.

### Cells

**exists(grid, r, c)**

Returns `true` if the cell at row-column coordinates `r`, `c` is not `undefined`. (A `null` cell is assumed to exist, but without content.) Otherwise `false`.

**occupied(grid, r, c)**

Returns `true` if the cell  at row-column coordinates `r`, `c` is a value other than `null` or `undefined`, otherwise returns `false`. Note that cells with the value `[]`, `""`, `{}`, `0`, or `false` would all return `true`.

**edge(grid, r, c)**

Returns `true` if the cell at row-column coordinates `r`, `c` is located on one or more edge of the grid. Otherwise `false`.

**corner(grid, r, c)**

Returns `true` if the cell at row-column coordinates `r`, `c` is located on one or more corner of the grid. Otherwise `false`.

**edges(grid, r, c)**

Returns the list of edges that the cell at row-column coordinates `r`, `c` is located on. Returns an empty array if none. (See the Constants / enums section for more info.)

**corners(grid, r, c)**

Returns the list of corners that the cell at row-column coordinates `r`, `c` is located on. Returns an empty array if none. (See the Constants / enums section for more info.)

**center(grid, r, c)**

Returns `true` if the cell at row-column coordinates `r`, `c` is the grid's center cell. Otherwise `false`.

**interior(grid, r, c)**

Returns `true` if the cell at row-column coordinates `r`, `c` is neither on an edge nor on a corner. Otherwise `false`.

**quadrants(grid, r, c)**

Returns a list of coordinate-plane quadrants (I, II, III, IV) that the cell at row-column coordinates `r`, `c` is located within. (Depending on the dimensions of the grid, a single cell might be located in an ambiguous quadrant; all possible quadrants are returned.)

**orthogonals(grid, r, c)**

Return an array representing each of the orthoganally adjacent cells to the cell at the given row-column coordinates `r`, `c`, in the following format:

    [north, west, east, south]

`undefined` is given for any orthogonals that fall outside of the grid's edges.

**diagonals(grid, r, c)**

Return an array representing each of the diagonally adjacent cells to the cell at the given row-column coordinates `r`, `c`, in the following format:

    [northwest, northeast, southwest, southeast]

`undefined` is given for diagonals that would fall outside of the grid's edges.

**neighbors(grid, r, c)**

Return an array representing all of the neighborhing cells to the cell at the given row-column coordinates `r`, `c`, in the following format:

    [northwest, north, northeast, west, east, southwest, south, southeast]

`undefined` is given for neighbors that would fall outside of the grid's edges.

**neighborhood(grid, r, c)**

Return a 9x9 grid, centered on the cell at the given row-column coordinate `r`, `c`, along with all of its neighbors, in the following format:

    [[northwest, north, northeast],
     [west,      cell,  east],
     [southwest, south, southeast]]

`undefined` is given for any neighbors that would fall outside of the containing grid's edges.

**copy(grid, r1, c1, r2, c2)**

Copy the cell value from the first row-column coordinate  to the second row-column coordinate, replacing the value at the second coordinate. (Reminder: This returns a new grid, and does not modify the original.)

**move(grid, r1, c1, r2, c2)**

Similar to _copy_, except sets the first cell value to `null`. (Reminder: This returns a new grid, and does not modify the original.)

**swap(grid, r1, c1, r2, c2)**

Swap the cell values at the given row-column coordinate pairs. (Reminder: This returns a new grid, and does not modify the original.)

**euclidean(grid, r1, c1, r2, c2)**

Return the Euclidean distance between two row-column coordinates.

**chebyshev(grid, r1, c1, r2, c2)**

Return the Chebyshev distance between two row-column coordinates.

**manhattan(grid, r1, c1, r2, c2)**

Return the Manhattan distance between two row-column coordinates. 

**map(grid, iterator)**

Return a new grid that is a cell-by-cell mapping of the original. The iterator signature is `iterator(value, r, c, grid)`, with `value` being the cell's value, and `r` and `c` being the row-column coordinates of that cell.

### Modification

**rotate(grid, direction)**

Return a new grid rotated in the given direction `direction` (left or right).

**flip(grid, axis)**

Return a new grid flipped over the given axis `axis`.

**pan(grid, direction, steps)**

Return a new grid, having "panned" over the given number of `steps` in the specified `direction`, assuming that the edges of the grid should wrap around to the opposite site. That is, if we pan up one step, the bottom row of the grid would become the top row, pushing the remaining rows down. Likewise, if we panned left two steps, the leftmost columns would be replaced by the rightmost two, pushing the rest to the right. Note that the panning direction is the opposite of the direction that the rows/columns appear to move.

**slide(grid, direction, steps)**

Similar to `pan`, except opposite: the _contents_ appear to move in the given direction.

**transpose(grid)**

Return a new grid with the elements reflected over its _main diagonal_, i.e., with its rows written as its columns.

**antitranspose(grid)**

Return a new grid with the elements reflected over its _secondary diagonal_. (Note the difference from `transpose`.)

**pad(grid, side, [value])**

Return a new grid with a new row or column shifted in on the given side `side`. If a `value` is given, initialize the cells to that value. Otherwise, initialize to `null`.

**trim(grid, side, [num])**

Return a new grid with the row or column of the given side trimmed off. If `num` is given, trim that many columns off of the given side, otherwise just trim one. If `num` exceeds the number of rows or columns, an empty grid is returned.

**paste(grid1, grid2, r, c)**

Return a new grid with contents of the first grid pasted over the contents of the second, starting at the row-column coordinates `r`, `c`. If the pasted grid exceeds the bounds of the pasted-to grid, the out-of-bounds cells will be ignored.

**glue(grid1, grid2, r, c)**

Like `paste`, except overlapping cells are included in the returned new grid, with additional `null` cells added to pad the grid so that the output grid is rectangular.

**stitch(grid1, grid2, edge)**

Return a new grid with the first grid stitched to the second grid, along the given edge `edge`.

**shuffle(grid)**

Return a new grid with the cell elements shuffled (randomly rearranged).

### Conversion / reduction

**flatten(grid)**

Return a _flat array_ of all the grid's cell values, in row-major order.

**squash(grid)**

Similar to _flatten_, except returning the values in column-major order.

**reduce(grid, iterator)**

Reduce the grid to a _flat array_ by reducing each row to a single value. Each row is passed to the `iterator`, with the return value of the iterator becoming the reduced value of the whole row. The iterator signature is `iterator(row, r, grid)`, with `row` being the row-array, and `r` being the row-index.

### Analysis

**symmetrical(grid, axis)**

Returns `true` if the passed grid is symmetrical when reflected about the axis `axis`.

### "Constants" / "enums"

The following constants / enums are provided for convenience and used throughout the library internally:

#### Axes

`Array2D.AXES.X` = `1`
`Array2D.AXES.Y` = `2`

#### Bearings

`Array2D.BEARINGS.NORTH`     = `1`
`Array2D.BEARINGS.NORTHWEST` = `2`
`Array2D.BEARINGS.NORTHEAST` = `3`
`Array2D.BEARINGS.SOUTH`     = `4`
`Array2D.BEARINGS.SOUTHWEST` = `5`
`Array2D.BEARINGS.SOUTHEAST` = `6`
`Array2D.BEARINGS.EAST`      = `7`
`Array2D.BEARINGS.WEST`      = `8`

#### Corners

`Array2D.CORNERS.TOP_LEFT`     = `1`
`Array2D.CORNERS.TOP_RIGHT`    = `2`
`Array2D.CORNERS.BOTTOM_LEFT`  = `3`
`Array2D.CORNERS.BOTTOM_RIGHT` = `4`

#### Directions

`Array2D.DIRECTIONS.UP`    = `1`
`Array2D.DIRECTIONS.DOWN`  = `2`
`Array2D.DIRECTIONS.LEFT`  = `3`
`Array2D.DIRECTIONS.RIGHT` = `4`

#### Edges

`Array2D.EDGES.TOP`    = `1`
`Array2D.EDGES.BOTTOM` = `2`
`Array2D.EDGES.LEFT`   = `3`
`Array2D.EDGES.RIGHT`  = `4`

#### Quadrants

`Array2D.QUADRANTS.I`   = `1`
`Array2D.QUADRANTS.II`  = `2`
`Array2D.QUADRANTS.III` = `3`
`Array2D.QUADRANTS.IV`  = `4`
