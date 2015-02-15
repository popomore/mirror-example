'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var mirror = require('gulp-mirror');
var rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp.src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(mirror(
      rename('browser.js'),
      rename('common.js')
    ))
    .pipe(gulp.dest('dist'));
});
