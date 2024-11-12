// Initializes the `casedefinition` service on path `/casedefinition`
const { Casedefinition } = require('./casedefinition.class');
const createModel = require('../../models/casedefinition.model');
const hooks = require('./casedefinition.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/casedefinition', new Casedefinition(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('casedefinition');

  service.hooks(hooks);
};
