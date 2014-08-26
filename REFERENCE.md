# Array2D.js API Reference

Array2D.js is a utility library for working with two-dimensional arrays (arrays of arrays) in JavaScript. It's useful when manipulating data that represents a two-dimensional grid -- that is, a collection of rows, where the rows are arrays whose elements are the "cells" of the grid.

## Terminology

For simplicity's sake, in the documentation below, we'll use the term "grid" and/or the variable name `grid` to mean an array of arrays, where the elements of the inner arrays are thought of as the values of the grid's cells. Here's an example "grid":

    [[1,2,'h'],
     [null,1],
     [1,3,4,5]]

Note that the only qualification for being a grid is that the object be an array whose elements are arrays. The inner arrays ("rows") can be of different lengths, and the cell elements can be of any type.

`null` is used to represent blank cells -- that is, cells that exist in the grid but which have no content. `undefined`, on the other hand, is used to represent _lack of a cell_, for example, when coordinates outside of the grid's bounds are accessed.

## Overview

All functions are provided on the `Array2D` namespace. Unless specified otherwise, each accepts a grid as the first argument and returns a new grid as the result, without modifying the original. Where possible, the functions are referentially transparent.

## API Reference

### Basic

##### get(grid, r, c)

Return the value for the cell at row-column coordinate `r`, `c`.

    Array2D.get([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => 5

##### set(grid, r, c, value)

Set the value for the cell at row-column coordinate `r`, `c` to the value `value`. (Reminder: This and other "setter" operations return a new grid; the original is not modified.)

    Array2D.set([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1, 0);

    // => [[1,2,3],
    // =>  [4,0,6],
    // =>  [7,8,9]]

##### width(grid)

Return the width of the grid (number of columns). If the rows are ragged, return the length of the longest row.

    Array2D.width([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => 3

##### height(grid)

Return the height of the grid (number of rows). If the columns are ragged, return the length of the longest column.

    Array2D.height([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => 3

##### area(grid)

Return the area (`width * height`) of the grid. If the rows are ragged, the length of the longest row is used as the width value, and the longest column for the height value.

    Array2D.area([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => 9

##### cells(grid)

Return the total number of cells in the grid. (Note the difference between this and the `area` function.) `null` cells are counted when tallying, but `undefined` cells are not.

    Array2D.cells([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => 6

### Essentials

##### crop(grid, r, c, width, height)

Return a subsection of the grid, going from the row-column coordinates `r`, `c` outward to the specified `width` and `height`. If the specified dimensions go outside of the grid's bounds, only the in-bounds part of the original grid will be returned.

    Array2D.crop([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1, 3, 3); // <~ Note out-of-bounds access

    // => [[5,6],
    // =>  [8,9]]

##### harvest(grid, r, c, width, height)

Similar to `crop`, except that if the selected region goes beyond the grid's bounds, the returned grid will be the full dimensions specified, padded with `null` cells to make up for any overlap. This function also supports negative row-column indices.

    Array2D.harvest([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1, 3, 3); // <~ Note out-of-bounds access

    // => [[5,6,null],
    // =>  [8,9,null],
    // =>  [null,null,null]]

##### rotate(grid, direction)

Return a new grid rotated one quarter-turn in the given direction `direction` (left or right). (See `lrotate` and `rrotate`.)

    Array2D.rotate([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], Array2D.DIRECTIONS.LEFT);

    // => [[3,6,9],
    // =>  [2,5,8],
    // =>  [1,4,7]]

##### lrotate(grid)

Rotate the grid one quarter-turn to the left.

    Array2D.lrotate([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[3,6,9],
    // =>  [2,5,8],
    // =>  [1,4,7]]

##### rrotate(grid)

Rotate the grid one quarter-turn to the right.

    Array2D.rrotate([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[7,4,1],
    // =>  [8,5,2],
    // =>  [9,6,3]]

##### flip(grid, axis)

Return a new grid flipped over the given axis `axis`. (See `vflip` and `hflip`.)

    Array2D.flip([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], Array2D.AXES.X); // <~ Flip over this axis

    // => [[7,8,9],
    // =>  [4,5,6],
    // =>  [1,2,3]]

##### vflip(grid)

Flip the grid vertically (over its horizontal axis).

    Array2D.vflip([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[7,8,9],
    // =>  [4,5,6],
    // =>  [1,2,3]]

##### hflip(grid)

Flip the grid horizontally (over its vertical axis).

    Array2D.transpose([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[3,2,1],
    // =>  [6,5,4],
    // =>  [9,8,7]]

##### pan(grid, direction, [steps])

Return a new grid, having "panned" over the given number of `steps` in the specified `direction`, and assuming that the edges of the grid should wrap around to the opposite side. That is, if we pan up one step, the bottom row of the grid would become the top row, pushing the remaining rows down. Likewise, if we panned left two steps, the leftmost columns would be replaced by the rightmost two, pushing the rest to the right. Note that the panning direction is the opposite of the direction that the rows/columns appear to move.

    Array2D.pan([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], Array2D.DIRECTIONS.UP, 1);

    // => [[7,8,9],
    // =>  [1,2,3],
    // =>  [4,5,6]]

See `upan`, `dpan`, `rpan`, and `lpan`.

##### upan(grid, [steps])

Pan up over the grid the given number of steps.

    Array2D.upan([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[7,8,9],
    // =>  [1,2,3],
    // =>  [4,5,6]]

##### dpan(grid, [steps])

Pan down over the grid the given number of steps.

    Array2D.dpan([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[4,5,6],
    // =>  [7,8,9],
    // =>  [1,2,3]]

##### lpan(grid, [steps])

Pan left over the grid the given number of steps.

    Array2D.lpan([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[3,1,2],
    // =>  [6,4,5],
    // =>  [9,7,8]]

##### rpan(grid, [steps])

Pan right over the grid the given number of steps.

    Array2D.rpan([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[3,2,1],
    // =>  [5,6,4],
    // =>  [8,9,7]]

##### slide(grid, direction, [steps])

Similar to `pan`, except opposite: the _contents_ appear to move in the given direction.

    Array2D.slide([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], Array2D.DIRECTIONS.UP, 1);

    // => [[4,5,6],
    // =>  [7,8,9],
    // =>  [1,2,3]]

See `uslide`, `dslide`, `rslide`, and `lslide`.

##### uslide(grid, [steps])

Slide the grid up the given number of steps.

    Array2D.uslide([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[4,5,6],
    // =>  [7,8,9],
    // =>  [1,2,3]]

##### dslide(grid, [steps])

Slide the grid down the given number of steps.

    Array2D.dslide([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[7,8,9],
    // =>  [1,2,3],
    // =>  [4,5,6]]

##### lslide(grid, [steps])

Slide the grid left the given number of steps.

    Array2D.lslide([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[3,2,1],
    // =>  [5,6,4],
    // =>  [8,9,7]]

##### rslide(grid, [steps])

Slide the grid right the given number of steps.

    Array2D.rslide([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[3,1,2],
    // =>  [6,4,5],
    // =>  [9,7,8]]

##### transpose(grid)

Return a new grid with the elements reflected over its _main diagonal_, i.e., with its rows written as its columns.

    Array2D.transpose([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[1,4,7],
    // =>  [2,5,8],
    // =>  [3,6,9]]

##### antitranspose(grid)

Return a new grid with the elements reflected over its _secondary diagonal_. (Note the difference from `transpose`.)

    Array2D.antitranspose([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[9,6,3],
    // =>  [8,5,2],
    // =>  [7,4,1]]

##### fill(grid, value)

Fill the entire grid with the given value.

    Array2D.fill([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 'x');

    // => [['x','x','x'],
    // =>  ['x','x','x'],
    // =>  ['x','x','x']]

##### fillArea(grid, r, c, width, height, value)

Fill an area of the grid, specified by the given starting coordinate and dimensinos, with the given value.

    Array2D.fillArea([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1, 2, 2, 'x');

    // => [[1,2,3],
    // =>  [4,'x','x'],
    // =>  [7,'x','x']]

##### pad(grid, side, times, [value])

Return a new grid with a new row or column shifted in on the given side `side`, the given number of `times`. If a `value` is given, initialize the cells to that value. Otherwise, initialize to `null`.

    Array2D.pad([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], Array2D.EDGES.TOP, 2, 'x');

    // => [['x','x','x'],
    // =>  ['x','x','x'],
    // =>  [1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

See `upad`, `dpad`, `lpad`, `rpad`.

##### upad(grid, times, [value])

Add padding to the upper side of the grid. Initialize the cells to the given `value`, else to `null`.

    Array2D.upad([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 'x');

    // => [['x','x','x'],
    // =>  ['x','x','x'],
    // =>  [1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### dpad(grid, times, [value])

Add padding to the bottom side of the grid. Initialize the cells to the given `value`, else to `null`.

    Array2D.dpad([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 'x');

    // => [[1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]],
    // =>  ['x','x','x'],
    // =>  ['x','x','x']]

##### lpad(grid, times, [value])

Add padding to the left side of the grid. Initialize the cells to the given `value`, else to `null`.

    Array2D.lpad([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 'x');

    // => [['x','x',1,2,3],
    // =>  ['x','x',4,5,6],
    // =>  ['x','x',7,8,9]]

##### rpad(grid, times, [value])

Add padding to the right side of the grid. Initialize the cells to the given `value`, else to `null`.

    Array2D.rpad([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 'x');

    // => [[1,2,3,'x','x'],
    // =>  [4,5,6,'x','x'],
    // =>  [7,8,9,'x','x']]

##### trim(grid, side, [num])

Return a new grid with the row or column of the given side trimmed off. If `num` is given, trim that many columns off of the given side, otherwise just trim one. If `num` exceeds the number of rows or columns, an empty grid is returned.

    Array2D.trim([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ], Array2D.EDGES.TOP, 2);

    // => [[9,0,1,2],
    // =>  [3,4,5,6]]

See `utrim`, `dtrim`, `rtrim`, `ltrim`.

##### utrim(grid, [num])

Trim a row off of the grid the given `num` times. If no `num` is given, trim just one.

    Array2D.utrim([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ], 2);

    // => [[9,0,1,2],
    // =>  [3,4,5,6]]

##### dtrim(grid, [num])

Trim the row off of the grid the given `num` times. If no `num` is given, trim just one.

    Array2D.dtrim([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ], 2);

    // => [[1,2,3,4],
    // =>  [5,6,7,8]]

##### rtrim(grid, [num])

Trim the row off of the grid the given `num` times. If no `num` is given, trim just one.

    Array2D.rtrim([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ], 2);

    // => [[1,2],
    // =>  [5,6],
    // =>  [9,0],
    // =>  [3,4]]

##### ltrim(grid, [num])

Trim the row off of the grid the given `num` times. If no `num` is given, trim just one.

    Array2D.ltrim([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ], 2);

    // => [[3,4],
    // =>  [7,8],
    // =>  [1,2],
    // =>  [5,6]]

##### stitch(grid1, grid2, edge)

Return a new grid with the first grid stitched to the second grid, along the given edge `edge`.

    Array2D.stitch([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i']
    ], Array2D.EDGES.TOP);

    // => [['a','b','c'],
    // =>  ['d','e','f'],
    // =>  ['g','h','i'],
    // =>  [1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

See `ustitch`, `dstitch`, `lstitch`, `rstitch`.

##### ustitch(grid1, grid2)

Stitch the second grid to the top of the first grid.

    Array2D.ustitch([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i']
    ]);

    // => [['a','b','c'],
    // =>  ['d','e','f'],
    // =>  ['g','h','i'],
    // =>  [1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### dstitch(grid1, grid2)

Stitch the second grid to the bottom of the first grid.

    Array2D.dstitch([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i']
    ]);

    // => [[1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9],
    // =>  ['a','b','c'],
    // =>  ['d','e','f'],
    // =>  ['g','h','i']]

##### lstitch(grid1, grid2)

Stitch the second grid onto the left of the first grid.

    Array2D.lstitch([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i']
    ]);

    // => [['a','b','c',1,2,3],
    // =>  ['d','e','f',4,5,6],
    // =>  ['g','h','i',7,8,9]]

##### rstitch(grid1, grid2)

Stitch the second grid onto the right of the first grid.

    Array2D.rstitch([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i']
    ]);

    // => [[1,2,3,'a','b','c'],
    // =>  [4,5,6,'d','e','f'],
    // =>  [7,8,9,'g','h','i']]

##### paste(grid1, grid2, r, c)

Return a new grid with contents of the first grid pasted over the contents of the second, starting at the row-column coordinates `r`, `c`. If the pasted grid exceeds the bounds of the pasted-to grid, the out-of-bounds cells will be ignored.

    Array2D.paste([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], 1, 1);

    // => [[1,2,3],
    // =>  [4,'a','b'],
    // =>  [7,'d','e']]

##### glue(grid1, grid2, r, c)

Like `paste`, except overlapping cells are included in the returned new grid, with additional `null` cells added to pad the grid so that the output grid is rectangular.

    Array2D.glue([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],[
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i']
    ], 1, 1);

    // => [[1,2,3,null],
    // =>  [4,'a','b','c'],
    // =>  [7,'d','e','f'],
    // =>  [null,'g','h','i']

##### shuffle(grid)

Return a new grid with the cell elements shuffled (randomly rearranged).

    Array2D.shuffle([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[3,2,8], // (For example)
    // =>  [1,5,6],
    // =>  [7,4,9]]

##### tidy(grid)

Return a tidied-up clone of the grid. Ragged rows are padded with `null` cells until they meet the length of the longest row, making the grid rectangular. `undefined` cells are replaced with `null` values. This operation starts at the leftmost element and pushes out to the right (i.e., rows are assumed to be left-aligned).

    Array2D.tidy([
        [1,2],
        [3],
        [7,undefined,9]
    ]);

    // => [[1,2,null],
    // =>  [3,null,null],
    // =>  [7,null,9]]

### Construction / casting

##### clone(grid)

Return a clone (exact copy) of the grid.

    Array2D.clone([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### build(w, h, [value])

Initialize a new grid of the desired width `w` (columns) and height `h` (rows). If `value` is passed, set every cell to that value; otherwise set each cell's value to `null`.

    Array2D.build(3, 3, 'x');

    // => [['x','x','x'],
    // =>  ['x','x','x'],
    // =>  ['x','x','x']]

##### buildWith(w, h, func)

Initialize a grid of the given dimensions, but instead of initializing from a single value, initialize each cell with the return value of the function `func`. The `func` signature should be `func(r, c, partial)`, where `r`, `c` are row-column coordinates and `partial` is the partially-constructed grid at that point. `null` is used if the `func` returns nothing or if one is not supplied.

    Array2D.buildWith(3, 3, function(r, c) {
      return r + c;
    });

    // => [[0,1,2],
    // =>  [1,2,3],
    // =>  [2,3,4]]

##### serialize(grid)

Return a JSON string of the grid. (Note that `JSON.stringify` either omits or converts to `null` any functions, symbols, or `undefined` values it finds in the collection.)

    Array2D.serialize([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => "[[1,2,3],[4,5,6],[7,8,9]]"

##### nullify(grid)

Return a new grid with the same dimensions as the original, but with all cell values converted to `null`.

    Array2D.nullify([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [[null,null,null],
    // =>  [null,null,null],
    // =>  [null,null,null]]

##### integerize(grid)

Return a new grid with the same dimensions as the original, but with all cell values converted to integers. (Note that `parseInt()` can return `NaN` for some expressions.)

    Array2D.integerize([
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ]);

    // => [[1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### stringize(grid)

Return a new grid with the same dimensions as the original, but with all cell values cast to strings.

    Array2D.stringize([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [['1','2','3'],
    // =>  ['4','5','6'],
    // =>  ['7','8','9']]

### Inspection / comparison / analysis

##### check(o)

Return `true` if the object `o` is a valid grid, i.e., an array of arrays. Otherwise `false`.

    Array2D.check([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => true

##### ragged(grid)

Return `true` if the grid is ragged, i.e., contains rows of differing lengths. Otherwise `false`.

    Array2D.ragged([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => true

##### rectangular(grid)

Opposite of `ragged`.

    Array2D.rectangular([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => true

##### empty(grid)

Returns `true` if the grid has no cells. Otherwise `false`. (Here, `[]` and `[[]]` would return `true`; `[[1]]` would return `false`.)

    Array2D.empty([[]]);

    // => true

##### blank(grid)

Returns `true` if all of the grid's cells are `null` or `undefined`, _or_ if the grid has no cells (using `empty`). Otherwise `false`.

    Array2D.blank([
        [null,null],
        [null,null],
    ]);

    // => true

##### singular(grid)

Return `true` if the grid has only one cell.

    Array2D.singular([[1]]);

    // => true

##### multitudinous(grid)

Return `true` if the grid has more than one cell.

    Array2D.multitudinous([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => true

##### sparse(grid)

Returns `true` if the grid has any `null` or `undefined` cells. (Row array length is used to determine the bounds of each row.) Otherwise `false`.

    Array2D.sparse([
        [1,2,null],
        [4,null,6],
        [null,8,9]
    ]);

    // => true

##### dense(grid)

Opposite of `sparse`.

    Array2D.dense([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => true

##### same(grid1, grid2)

Return `true` if every cell value in the first grid is equal to the respective cell in the second grid. Otherwise `false`. The cell-comparison is done using the strict equality operator (`===`).

    Array2D.same([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => true

##### different(grid1, grid2)

Opposite of `same`.

    Array2D.different([
        [1,2,3],
        [4,'foo',6],
        [7,8,9]
    ],[
        [1,2,3],
        [4,'bar',6],
        [7,8,9]
    ]);

    // => true

##### diff(grid1, grid2)

Return an array of coordinates that are different between the two grids, starting at row-column coordinates `0`,`0` in both grids, and extending out to the edges of the larger of the two grids.

    Array2D.diff([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],[
        [9,8,7],
        [6,5,4],
        [3,2,1]
    ]);

    // => [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]

##### contains(grid, value)

Returns `true` if any cell in the grid matches the value `value` using the strict equality operator (`===`). Otherwise `false`.

    Array2D.contains([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 5);

    // => true

##### includes(grid1, grid2)

Returns `true` if the first grid contains the second grid.

    Array2D.includes([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ],[
        [6,7],
        [0,1]
    ]);

    // => true

##### symmetrical(grid, axis)

Returns `true` if the passed grid is symmetrical when reflected about the axis `axis`.

    Array2D.symmetrical([
        [1,2,2,1]
        [2,4,4,2]
        [5,6,6,5]
    ], Array2D.AXES.Y); // <~ Reflect about this axis

    // => true

See `hsymmetrical`, `vsymmetrical`.

##### hsymmetrical(grid)

Returns `true` if the grid is horizontally symmetrical (i.e., when reflected over the y-axis).

    Array2D.hsymmetrical([
        [1,2,2,1]
        [2,4,4,2]
        [5,6,6,5]
    ]);

    // => true

##### vsymmetrical(grid)

Returns `true` if the grid is vertically symmetrical (i.e., when reflected over the x-axis).

    Array2D.vsymmetrical([
        [1,2,3,4],
        [5,6,7,8],
        [5,6,7,8],
        [1,2,3,4]
    ]);

    // => true

### Iteration / collection

##### eachCell(grid, iterator)

Iterate over every cell in the grid, in row-major order. Passes each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

    Array2D.eachCell([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(cell, r, c, grid) {
        // ...
    });

##### nthCell(grid, n, s, iterator)

Iterate over every "nth" cell in the grid, using `n` as the step value, and `s` as the index of the starting cell (row-major). Passes each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

For a simple illustration, the cells marked `x` would be returned if `nthCell()` were called with `n = 2` and `s = 0`:

    [[x, _, x],
     [_, x, _],
     [x, _, x]]

Example code:

    Array2D.nthCell([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 0, function(cell, r, c, grid) {
        // ...
    });

##### eachRow(grid, iterator)

Iterate over every row in the grid, in row-major order. Passes each row-array to the `iterator`, a function with signature `iterator(row, r, grid)`, where `row` is the row-array, `r` is the row-index, and `grid` is the original grid.

    Array2D.eachRow([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(row, r, grid) {
        // ...
    });

##### eachColumn(grid, iterator)

Iterate over every column in the grid, with the column-array elements presented in column-major order. Passes each column-array to the `iterator`, a function with signature `iterator(column, c, grid)`, where `column` is the column-array, `c` is the column-index, and `grid` is the original grid.

    Array2D.eachColumn([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(column, c, grid) {
        // ...
    });

##### forArea(grid, r, c, width, height, iterator)

Iterate over every cell in the area specified by the given dimensions. Passes each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

    Array2D.forArea([
        [1,2,3,4,5],
        [6,7,8,9,0],
        [1,2,3,4,5],
        [6,7,8,9,0]
    ], 1, 1, 2, 2, function(cell, r, c, grid) {
        // ...
    });

##### forRow(grid, r, iterator)

Iterate over every cell in the row for the given row-coordinate. Passes each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

    Array2D.forRow([
        [1,2,3,4,5],
        [6,7,8,9,0],
        [1,2,3,4,5],
        [6,7,8,9,0]
    ], 1, function(cell, r, c, grid) {
        // ...
    });

##### forColumn(grid, c, iterator)

Iterate over every cell in the column for the given column-coordinate. Passes each cell value to the `iterator`, a function with signature `iterator(value, r, c, grid)`, where `value` is the cell value, `r` and `c` are row-column coordinates, and `grid` is the original grid.

    Array2D.forColumn([
        [1,2,3,4,5],
        [6,7,8,9,0],
        [1,2,3,4,5],
        [6,7,8,9,0]
    ], 1, function(cell, r, c, grid) {
        // ...
    });

##### flatten(grid)

Return a _flat array_ of all the grid's cell values, in row-major order.

    Array2D.flatten([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [1,2,3,4,5,6,7,8,9]

##### squash(grid)

Similar to _flatten_, except returning the values in column-major order.

    Array2D.squash([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [1,4,7,2,5,8,3,6,9]

##### map(grid, iterator)

Return a new grid that is a cell-by-cell mapping of the original. The iterator signature is `iterator(value, r, c, grid)`, with `value` being the cell's value, and `r` and `c` being the row-column coordinates of that cell.

    Array2D.map([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(cell, r, c, grid) {
        return cell * 2;
    });

    // => [[2,4,6],
    // =>  [8,10,12],
    // =>  [14,16,18]]

##### reduce(grid, iterator)

Reduce the grid to a _flat array_ by reducing each row to a single value. Each row is passed to the `iterator`, with the return value of the iterator becoming the reduced value of the whole row. The iterator signature is `iterator(row, r, grid)`, with `row` being the row-array, and `r` being the row-index.

    Array2D.reduce([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(row, r) {
        return row[0] * r;
    });

    // => [0,4,14]

##### boildown(grid, iterator)

Similar to `reduce`, except iteration occurs in column-major order.

    Array2D.squash([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(column, c) {
        return column[0] * c;
    });

    // => [0,2,6]

### Rows / columns

##### row(grid, r)

Return the row-array at the row-coordinate.

    Array2D.row([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [4,5,6]

##### column(grid, c)

Return the column-array at the column-coordinate.

    Array2D.column([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [2,5,8]

##### top(grid)

Return the first row-array of the grid as a _flat array_.

    Array2D.top([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [1,2,3]

##### bottom(grid)

Return the last row-array of the grid as a _flat array_.

    Array2D.bottom([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [7,8,9]

##### left(grid)

Return the first column-array of the grid as a _flat array_, with the elements presented in column-major order.

    Array2D.left([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [1,4,7]

##### right(grid)

Return the last column-array of the grid as a _flat array_, with the elements presented in column-major order.

    Array2D.right([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]);

    // => [3,6,9]

##### widest(grid)

Return the longest _row_ of the grid, or the first found row if all are the same length.

    Array2D.widest([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => [1,2,3]

##### thinnest(grid)

Return the shortest _row_ of the grid, or the first found row if all are the same length.

    Array2D.thinnest([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => [6]

##### tallest(grid)

Return the longest _column_ of the grid, or the first found column if all are the same length.

    Array2D.tallest([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => [1,4,6]

##### shortest(grid)

Return the shortest _column_ of the grid, or the first found column if all are the same length.

    Array2D.shortest([
        [1,2,3],
        [4,5],
        [6]
    ]);

    // => [3]

##### setRow

Set the row at the given row-coordinate to the given array.

    Array2D.setRow([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, ['x', 'x', 'x']);

    // => [[1,2,3],
    // =>  ['x','x','x'],
    // =>  [7,8,9]]

##### setColumn

Set the column at the given column-coordinate to the given array.

    Array2D.setColumn([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, ['x', 'x', 'x']);

    // => [[1,'x',3],
    // =>  [4,'x',6],
    // =>  [7,'x',9]]

##### fillRow(grid, r, value)

Fill the row at the given row-coordinate with the given value.

    Array2D.fillRow([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 'x');

    // => [[1,2,3],
    // =>  ['x','x','x'],
    // =>  [7,8,9]]

##### fillColumn(grid, c, value)

Fill the column at the given column-coordinate with the given value.

    Array2D.fillColumn([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 'x');

    // => [[1,'x',3],
    // =>  [4,'x',6],
    // =>  [7,'x',9]]

##### spliceRow

Insert a row-array at the given row-coordinate (index), pushing the other rows forward ahead.

    Array2D.spliceRow([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, ['x','x','x']);

    // => [[1,2,3],
    // =>  ['x','x','x'],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### spliceColumn

Insert a column-array at the given column-coordinate (index), pushing the other columns ahead.

    Array2D.spliceColumn([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, ['x','x','x']);

    // => [[1,'x',2,3],
    // =>  [4,'x',5,6],
    // =>  [7,'x',8,9]]

##### deleteRow

Delete the row at the row-coordinate (index).

    Array2D.deleteRow([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[1,2,3],
    // =>  [7,8,9]]

##### deleteColumn

    Array2D.deleteColumn([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1);

    // => [[1,3],
    // =>  [4,6],
    // =>  [7,9]]

### Cells

##### exists(grid, r, c)

Returns `true` if the cell at row-column coordinates `r`, `c` exists, i.e. is not `undefined`. (A `null` cell is assumed to exist, but without content.) Otherwise `false`.

    Array2D.exists([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => true

##### occupied(grid, r, c)

Returns `true` if the cell  at row-column coordinates `r`, `c` is occupied, i.e. has any value other than `null` or `undefined`. Otherwise returns `false`. Note that cells with the value `[]`, `""`, `{}`, `0`, or `false` would all be considered "occupied" and return `true`.

    Array2D.occupied([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => true

##### inBounds(grid, r, c)

Returns `true` if the cell  at row-column coordinates `r`, `c` is within the grid's area.

    Array2D.inBounds([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => true

##### copy(grid, r1, c1, r2, c2)

Copy the cell value from the first row-column coordinate  to the second row-column coordinate, replacing the value at the second coordinate. (Reminder: This returns a new grid, and does not modify the original.)

    Array2D.copy([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 0, 0, 2);

    // => [[1,2,7],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### move(grid, r1, c1, r2, c2)

Similar to _copy_, except sets the first cell value to `null`. (Reminder: This returns a new grid, and does not modify the original.)

    Array2D.copy([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 0, 0, 2);

    // => [[1,2,7],
    // =>  [4,5,6],
    // =>  [null,8,9]]

##### swap(grid, r1, c1, r2, c2)

Swap the cell values at the given row-column coordinate pairs. (Reminder: This returns a new grid, and does not modify the original.)

    Array2D.copy([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 0, 0, 2);

    // => [[1,2,7],
    // =>  [4,5,6],
    // =>  [3,8,9]]

### Location / relationships

##### edge(grid, r, c)

Returns `true` if the cell at row-column coordinates `r`, `c` is located on one or more edge of the grid. Otherwise `false`. (Note: To determine `edge`-ness, the grid is assumed to be rectangular. For ragged grids, you may want to use `boundary`.)

    Array2D.edge([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 1);

    // => true

##### edges(grid, r, c)

Returns the list of edges that the cell at row-column coordinates `r`, `c` is located on. Returns an empty array if none. See the "Constants / enums" section for more info about the returned values. (Note: To determine `edge`-ness, the grid is assumed to be rectangular. For ragged grids, you may want to use `boundaries`.)

    Array2D.edges([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 2);

    // => [Array2D.EDGES.RIGHT, Array2D.EDGES.BOTTOM]

##### corner(grid, r, c)

Returns `true` if the cell at row-column coordinates `r`, `c` is located on one or more corner of the grid. Otherwise `false`. (Note: To determine `corner`-ness, the grid is assumed to be rectangular. For ragged grids, you may want to use `crook`.)

    Array2D.corner([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 2);

    // => true

##### corners(grid, r, c)

Returns the list of corners that the cell at row-column coordinates `r`, `c` is located on. Returns an empty array if none. See the "Constants / enums" section for more info about the returned values. (Note: To determine `corner`-ness, the grid is assumed to be rectangular. For ragged grids, you may want to use `crooks`.)

    Array2D.corners([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 2);

    // => [Array2D.CORNERS.BOTTOM_RIGHT]

##### boundary(grid, r, c)

Similar to `edge`, except for a ragged grid. Calculates with respect to individual row-length instead of grid width.

    Array2D.boundary([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    // => true

##### boundaries(grid, r, c)

Similar to `edges`, except for a ragged grid. Calculates with respect to individual row-length instead of grid width.

    Array2D.boundary([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    // => [Array2D.BOUNDARIES.LOWER, Array2D.BOUNDARIES.RIGHT]

##### crook(grid, r, c)

Similar to `corner`, except for a ragged grid. Calculates with respect to individual row-length instead of grid width.

    Array2D.crook([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    // => true

##### crooks(grid, r, c)

Similar to `corners`, except for a ragged grid. Calculates with respect to individual row-length instead of grid width.

    Array2D.boundary([
      [1,2,3],
      [4,5],
      [7]
    ], 1, 1);

    // => [Array2D.CROOKS.LOWER_RIGHT]

##### center(grid, r, c)

Returns `true` if the cell at row-column coordinates `r`, `c` is the grid's center cell. Otherwise `false`.

    Array2D.center([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => true

##### interior(grid, r, c)

Returns `true` if the cell at row-column coordinates `r`, `c` is neither on an edge nor on a corner. Otherwise `false`.

    Array2D.interior([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => true

##### quadrants(grid, r, c)

Returns a list of coordinate-plane quadrants (I, II, III, IV) that the cell at row-column coordinates `r`, `c` is located within. (Depending on the dimensions of the grid, a single cell might be located in an ambiguous quadrant; all possible quadrants are returned.)

    Array2D.center([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 2, 2);

    // => [Array2D.QUADRANTS.IV]

##### orthogonals(grid, r, c)

Return an array representing each of the orthoganally adjacent cells to the cell at the given row-column coordinates `r`, `c`, in the following format:

    [north, west, east, south]

`undefined` is given for any orthogonals that fall outside of the grid's edges.

Example code:

    Array2D.orthogonals([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => [2, 4, 6, 8]

##### diagonals(grid, r, c)

Return an array representing each of the diagonally adjacent cells to the cell at the given row-column coordinates `r`, `c`, in the following format:

    [northwest, northeast, southwest, southeast]

`undefined` is given for diagonals that would fall outside of the grid's edges.

Example code:

    Array2D.orthogonals([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => [1, 3, 7, 9]

##### neighbors(grid, r, c)

Return an array representing all of the neighborhing cells to the cell at the given row-column coordinates `r`, `c`, in the following format:

    [northwest, north, northeast, west, east, southwest, south, southeast]

`undefined` is given for neighbors that would fall outside of the grid's edges.

Example code:

    Array2D.neighbors([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 1, 1);

    // => [1, 2, 3, 4, 6, 7, 8, 9]

##### neighborhood(grid, r, c)

Return a 9x9 grid, centered on the cell at the given row-column coordinate `r`, `c`, along with all of its neighbors, in the following format:

    [[northwest, north, northeast],
     [west,      cell,  east],
     [southwest, south, southeast]]

`undefined` is given for any neighbors that would fall outside of the containing grid's edges.

Example code:

    Array2D.neighborhood([
        [1,2,3,4],
        [5,6,7,8],
        [9,0,1,2],
        [3,4,5,6]
    ], 2, 2);

    // => [[6,7,8],
    // =>  [0,1,2],
    // =>  [4,5,6]]

##### euclidean(grid, r1, c1, r2, c2)

Return the Euclidean distance between two row-column coordinates.

    Array2D.euclidean([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 0, 0, 2, 2);

    // => 2.82...

##### chebyshev(grid, r1, c1, r2, c2)

Return the Chebyshev distance between two row-column coordinates.

    Array2D.chebyshev([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 0, 0, 2, 2);

    // => 2

##### manhattan(grid, r1, c1, r2, c2)

Return the Manhattan distance between two row-column coordinates. 

    Array2D.manhattan([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], 0, 0, 2, 2);

    // => 4

### Coordinates

Note: Coordinate pairs are represented by an array `[r, c]`, where `r` is the row index and `c` is the column index.

##### find(grid, finder)

Return a list of coordinates for every cell in the grid that the finder function `finder` returns truthy.

    Array2D.find([
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ], function(cell) {
        return cell % 2 === 0;
    });

    // => [[0,1],[1,0],[1,2],[2,1]]

##### contiguous(grid, finder)

Return a list of groups of coordinates, where each group is an array of coordinates that are detected to be contiguous, and each coordinate in the group is the coordinate of a cell matched by the `finder` function.

A group is considered continuous if all members are orthogonally adjacent to at least one other member of the group. To qualify, every cell in the group needs to return truthy for the `finder` function.

The search begins at the top-left cell and iterates over the grid in row-major order.

    Array2D.contiguous([
        [0,0,1,1,0],
        [1,0,1,0,1],
        [1,0,1,1,0],
        [0,1,0,0,1],
        [1,0,1,1,1]
    ], function(cell) {
        return cell === 1;
    });

    // => [
    // =>     [  [0,2],[0,3],[1,2],[2,2],[2,3]  ],
    // =>     [  [1,0],[2,0]  ],
    // =>     [  [1,4]  ],
    // =>     [  [3,1]  ],
    // =>     [  [3,4],[4,2],[4,3],[4,4]  ],
    // =>     [  [4,0] ]
    // => ]

##### touching(grid, finder)

Similar to `contiguous`, except groups are composed of cells that are orthogonally _or_ diagonally adjacent.

    Array2D.touching([
        [0,0,1,1,0],
        [1,0,1,0,1],
        [1,0,1,1,0],
        [0,0,0,0,1],
        [1,0,1,1,1]
    ], function(cell) {
        return cell === 1;
    });

    // => [
    // =>     [  [0,2],[0,3],[1,2],[1,4],[2,2],[2,3],[3,4],[4,2],[4,3],[4,4]  ],
    // =>     [  [1,0],[2,0] ],
    // =>     [  [4,0] ]
    // => ]

##### surrounds(grid, r, c, [allowOutOfBounds])

Return the coordinates of all the cells that surround the cell at row-column coordinate `r`, `c`. (This function is in contrast to `neighbors`, which returns the _values_ of the surrounding cells.) Don't include coordinates of any cells that are out-of-bounds, unless `allowOutOfBounds` is specified.

    Array2D.surrounds([
        [1,2,3,4,5],
        [6,7,8,9,0],
        [1,2,3,4,5],
        [6,7,8,9,0],
        [1,2,3,4,5]
    ], 2, 0);

    // => [[1,0],[1,1],[2,1],[3,0],[3,1]]

### Import / export

##### fromArray(arr, width, height)

Conver the given flat array into a grid of the specified `width` and `height`:

    Array2D.fromArray([1,2,3,4,5,6,7,8,9], 3, 3);

    // => [[1,2,3],
    // =>  [4,5,6],
    // =>  [7,8,9]]

##### fromCanvas(canvas) [browser-only]

Produces a "grid" (array of arrays) from the given HTML `<canvas>` element. Each pixel's four _rgba_ color values will be converted into an array of integers. The result is a grid like this:

    [[[255,255,255,255],[255,255,255,255]],
     [[255,255,255,255],[255,255,255,255]]]

Example code:

    var canvas = document.getElementById('mycanvas');
    var grid = Array2D.fromCanvas(canvas);

##### toCanvas(grid, canvas, converter) [browser-only]

Paints the given grid onto the given HTML `<canvas>` element by running each cell through the given `converter` function, which is expected to transform that cell into an array of four _rgba_ color values.

Example code:

    var canvas = document.getElementById('mycanvas');
    Array2D.toCanvas(
        [[1,2,3],
         [4,5,6],
         [7,8,9]],
        canvas,
        function(cell) {
            return [cell, cell, cell, 255]; // [r,g,b,a]
        }
    );

Note that this method has the side effect of modifying the canvas' content.

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

#### Boundaries

`Array2D.BOUNDARIES.UPPER` = `1`  
`Array2D.BOUNDARIES.LOWER` = `2`  
`Array2D.BOUNDARIES.LEFT`  = `3`  
`Array2D.BOUNDARIES.RIGHT` = `4`  

#### Corners

`Array2D.CORNERS.TOP_LEFT`     = `1`  
`Array2D.CORNERS.TOP_RIGHT`    = `2`  
`Array2D.CORNERS.BOTTOM_LEFT`  = `3`  
`Array2D.CORNERS.BOTTOM_RIGHT` = `4`  

#### Crooks

`Array2D.CROOKS.UPPER_LEFT`  = `1`  
`Array2D.CROOKS.UPPER_RIGHT` = `2`  
`Array2D.CROOKS.LOWER_LEFT`  = `3`  
`Array2D.CROOKS.LOWER_RIGHT` = `4`  

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

## Help / troubleshooting / bugs

Please see [GitHub issues](https://github.com/matthewtoast/Array2D.js/issues).
