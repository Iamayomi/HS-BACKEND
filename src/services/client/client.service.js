// Initializes the `client` service on path `/client`
const { Client } = require('./client.class');
const createModel = require('../../models/client.model');
const hooks = require('./client.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex','$size']
  };

  // Initialize our service with any options it requires
  app.use('/client', new Client(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('client');

  service.hooks(hooks);
};
