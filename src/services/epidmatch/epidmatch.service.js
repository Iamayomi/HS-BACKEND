// Initializes the `epidmatch` service on path `/epidmatch`
const { Epidmatch } = require('./epidmatch.class');
const createModel = require('../../models/epidmatch.model');
const hooks = require('./epidmatch.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/epidmatch', new Epidmatch(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('epidmatch');

  service.hooks(hooks);
};
