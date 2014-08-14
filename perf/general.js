var fs = require('fs');
var path = require('path');
var Benchmark = require('benchmark');
var Array2D = require(path.join(__dirname, '..', 'Array2D'));

var suite = new Benchmark.Suite;

suite.add('#transpose', function() {
  Array2D.transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]);
})
suite.add('#map', function() {
  Array2D.transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], function(cell) {
    return cell;
  });
})
suite.add('#glue', function() {
  Array2D.glue([
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],[
    [1,1,1],
    [1,1,1],
    [1,1,1]
  ], 1, 1);
})
.on('cycle', function(event) {
  console.log(String(event.target), '(ran at ' + new Date() + ')');
})
.run();
