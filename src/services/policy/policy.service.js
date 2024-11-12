// Initializes the `policy` service on path `/policy`
const { Policy } = require('./policy.class');
const createModel = require('../../models/policy.model');
const hooks = require('./policy.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex','$search']

  };

  // Initialize our service with any options it requires
  app.use('/policy', new Policy(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('policy');

  service.hooks(hooks);
};
