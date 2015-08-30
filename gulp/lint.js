'use strict';

const eslint = require('gulp-eslint');
const gulp = require('gulp');

// lint JS
gulp.task('lint', function () {
  return gulp.src(['*.js', 'gulp/**/*.js', 'server/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());

  // TODO: Once we're ready, uncomment the line below
  // .pipe(eslint.failOnError())
});
