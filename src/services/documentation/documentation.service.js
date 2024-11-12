// Initializes the `documentation` service on path `/documentation`
const { Documentation } = require('./documentation.class');
const createModel = require('../../models/documentation.model');
const hooks = require('./documentation.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/documentation', new Documentation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('documentation');

  service.hooks(hooks);
};
