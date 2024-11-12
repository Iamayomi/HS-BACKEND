// Initializes the `utilization` service on path `/utilization`
const { Utilization } = require('./utilization.class');
const createModel = require('../../models/utilization.model');
const hooks = require('./utilization.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/utilization', new Utilization(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('utilization');

  service.hooks(hooks);
};
