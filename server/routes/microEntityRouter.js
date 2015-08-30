'use strict';

const router = require('express').Router();
const controller = require('../controllers/microEntityController');

// requests to get all microentities should be denied
router.get('/', controller.find);

module.exports = router;
