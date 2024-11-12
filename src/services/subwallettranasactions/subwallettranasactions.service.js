// Initializes the `subwallettranasactions` service on path `/subwallettranasactions`
const { Subwallettranasactions } = require('./subwallettranasactions.class');
const createModel = require('../../models/subwallettranasactions.model');
const hooks = require('./subwallettranasactions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/subwallettranasactions', new Subwallettranasactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('subwallettranasactions');

  service.hooks(hooks);
};
