'use strict';

const apiRouter = require('./apiRouter');

module.exports = function topoliRouter(app) {
  // send all /api route requests to api router
  app.use('/api/v1', apiRouter);
};
