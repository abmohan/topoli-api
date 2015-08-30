'use strict';

const gulp = require('gulp');
const loadData = require('../server/bin/load');

// lint JS
gulp.task('load', function (done) {
  loadData()
  .then(done);
});
