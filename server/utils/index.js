'use strict';

const assert = require('assert');
const R = require('ramda');

exports.removeUndefinedProps = function removeUndefinedProps(obj) {
  assert(obj, 'object required');

  return R.reduce(
    function objKeyReducer(reducedObj, key) {
      if (obj[key]) {
        reducedObj[key] = obj[key];
      }
      return reducedObj;
    },
    {},
    R.keys(obj)
  );
};
