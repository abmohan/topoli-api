'use strict';

const utils = require('../utils');
const MacroEntity = require('../models/MacroEntity');

exports.find = function find(req, res) {

  // parse query params
  const searchCriteria = utils.removeUndefinedProps({
    'properties.entity': (req.query.entity || '').toUpperCase() || undefined,
    'properties.jurisdiction': (req.query.jurisdiction || '').toUpperCase()
      || undefined,
    'properties.year': parseInt(req.query.year) || undefined
  });

  // don't include geodata by default
  const includeGeodataByDefault = false;
  const includeGeodata = req.query.includegeodata || includeGeodataByDefault;

  const fieldsToReturn = utils.removeUndefinedProps({
    // set fields to undefined to hide them
    geometry: includeGeodata ? undefined : 0
  });

  console.log(searchCriteria, fieldsToReturn);

  return MacroEntity.find(searchCriteria, fieldsToReturn)
    .exec()
    .then(function (results) {
      return res.send(results);
    });
};
