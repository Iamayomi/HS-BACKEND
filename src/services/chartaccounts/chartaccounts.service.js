// Initializes the `chartaccounts` service on path `/chartaccounts`
const { Chartaccounts } = require('./chartaccounts.class');
const createModel = require('../../models/chartaccounts.model');
const hooks = require('./chartaccounts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/chartaccounts', new Chartaccounts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chartaccounts');

  service.hooks(hooks);
};
