'use strict';

const bluebird = require('bluebird');
const mongoose = bluebird.promisifyAll(require('mongoose'));

const ShapefileSchema = require('./ShapefileSchema');

const MacroEntitySchema = ShapefileSchema.extend({ });
const MacroEntity = mongoose.model('MacroEntity', MacroEntitySchema);

module.exports = MacroEntity;
