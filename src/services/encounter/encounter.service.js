// Initializes the `encounter` service on path `/encounter`
const { Encounter } = require('./encounter.class');
const createModel = require('../../models/encounter.model');
const hooks = require('./encounter.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/encounter', new Encounter(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('encounter');

  service.hooks(hooks);
};
