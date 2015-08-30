'use strict';

const gulp = require('gulp');

// lint JS files on change
gulp.task('watch', function () {
  gulp.watch(gulp.paths.scripts, ['lint']);
});
