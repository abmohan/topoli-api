'use strict';

const router = require('express').Router();
const controller = require('../controllers/electionController');

router.get('/', controller.find);

module.exports = router;
