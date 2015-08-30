'use strict';

const router = require('express').Router();

const electionRouter = require('./electionRouter');
const macroEntityRouter = require('./macroEntityRouter');
const microEntityRouter = require('./microEntityRouter');

router.get('/', function (req, res) {
  return res.send('TOpoli API');
});

// send microentity and macro routes to their respective routers
router.use('/elections', electionRouter);
router.use('/microentities', microEntityRouter);
router.use('/macroentities', macroEntityRouter);

module.exports = router;
