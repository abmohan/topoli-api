'use strict';

const router = require('express').Router();
const controller = require('../controllers/macroEntityController');

router.get('/', controller.find);

module.exports = router;
