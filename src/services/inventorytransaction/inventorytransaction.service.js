// Initializes the `inventorytransaction` service on path `/inventorytransaction`
const { Inventorytransaction } = require('./inventorytransaction.class');
const createModel = require('../../models/inventorytransaction.model');
const hooks = require('./inventorytransaction.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/inventorytransaction', new Inventorytransaction(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('inventorytransaction');

  service.hooks(hooks);
};
