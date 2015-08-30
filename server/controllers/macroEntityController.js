'use strict';

const utils = require('../utils');
const MacroEntity = require('../models/MacroEntity');

exports.find = function find(req, res) {

  let searchCriteria = utils.removeUndefinedProps({
    'properties.entity': (req.query.entity || '').toUpperCase() || undefined,
    'properties.jurisdiction': (req.query.jurisdiction || '').toUpperCase()
      || undefined,
    'properties.year': parseInt(req.query.year) || undefined
  });
  console.log(searchCriteria);

  MacroEntity.find(searchCriteria)
  .exec()
  .then(function (results) {
    res.send(results);
  });
};
