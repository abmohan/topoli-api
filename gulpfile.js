'use strict';

const gulp = require('gulp');

// require gulp directory
require('require-dir')('./gulp');

gulp.paths = {
  'scripts': ['*.js', 'gulp/**/*.js', 'server/**/*.js']
};

// start dev task by default
gulp.task('default', ['dev']);
