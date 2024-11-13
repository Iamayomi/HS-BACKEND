const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  mongoose.connect(
    app.get('mongodb'),
    { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  // mongoose.set('debug', true);

  app.set('mongooseClient', mongoose);
};

// nr7RCjn36amnD5jC

