'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

// live reloader for server
gulp.task('nodemon', function(cb) {

  let called = false;

  return nodemon({
    script: 'server/index.js',
    watch: 'server/**/*.js'
  })
  .on('start', function() {
    if (!called) {
      called = true;
      return cb();
    }
  });
});
