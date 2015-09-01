'use strict';

const utils = require('../utils');
const MicroEntity = require('../models/MicroEntity');

exports.find = function find(req, res) {

  let searchCriteria = utils.removeUndefinedProps({
    'jurisdiction': (req.query.jurisdiction || '').toUpperCase() || undefined,
    'office': (req.query.office || '').toUpperCase() || undefined,
    'year': parseInt(req.query.year) || undefined
  });

  return MicroEntity.aggregate([
      {
        $project: {
          jurisdiction: '$properties.jurisdiction',
          results: '$properties.results',
          _id: 0
        }
      },
      {
        $unwind: '$results'
      },
      {
        $project: {
          jurisdiction: '$jurisdiction',
          office: '$results.office',
          year: '$results.year'
        }
      },
      {
        $match: searchCriteria
      },
      {
        $group: {
          _id: {
            office: '$office',
            jurisdiction: '$jurisdiction',
            year: '$year'
          }
        }
      },
      {
        $project: {
          office: '$_id.office',
          jurisdiction: '$_id.jurisdiction',
          year: '$_id.year',
          _id: 0
        }
      }
    ])
    .exec()
    .then(function (results) {
      return res.send(results);
    });

};
