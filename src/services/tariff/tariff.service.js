// Initializes the `tariff` service on path `/tariff`
const { Tariff } = require('./tariff.class');
const createModel = require('../../models/tariff.model');
const hooks = require('./tariff.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']

  };

  // Initialize our service with any options it requires
  app.use('/tariff', new Tariff(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tariff');

  service.hooks(hooks);
};
