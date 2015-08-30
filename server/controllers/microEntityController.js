'use strict';

const MicroEntity = require('../models/MicroEntity');

exports.find = function findByName(req, res) {

  var jurisdiction = req.query.jurisdiction.toUpperCase();

  MicroEntity.find({ 'properties.jurisdiction':  jurisdiction })
  .exec()
  .then(function (results) {
    res.send(results);
  });

};
