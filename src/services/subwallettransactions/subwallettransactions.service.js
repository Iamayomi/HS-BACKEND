// Initializes the `subwallettransactions` service on path `/subwallettransactions`
const { Subwallettransactions } = require('./subwallettransactions.class');
const createModel = require('../../models/subwallettransactions.model');
const hooks = require('./subwallettransactions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/subwallettransactions', new Subwallettransactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('subwallettransactions');

  service.hooks(hooks);
};
