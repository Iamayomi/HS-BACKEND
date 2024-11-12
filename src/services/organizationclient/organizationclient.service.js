// Initializes the `organizationclient` service on path `/organizationclient`
const { Organizationclient } = require('./organizationclient.class');
const createModel = require('../../models/organizationclient.model');
const hooks = require('./organizationclient.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex','$search']
  };

  // Initialize our service with any options it requires
  app.use('/organizationclient', new Organizationclient(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('organizationclient');

  service.hooks(hooks);
};
