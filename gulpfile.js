var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Dist name
var distName = 'Array2D';

// Uglify
gulp.task('uglify', function() {
  gulp.src([path.join(__dirname, distName + '.js')])
    .pipe(uglify())
    .pipe(rename(distName + '.min.js'))
    .pipe(gulp.dest(path.join(__dirname, 'dist')));
});

// Default task: All of the above
gulp.task('default', ['uglify']);
