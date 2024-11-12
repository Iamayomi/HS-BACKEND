// Initializes the `documentclass` service on path `/documentclass`
const { Documentclass } = require('./documentclass.class');
const createModel = require('../../models/documentclass.model');
const hooks = require('./documentclass.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/documentclass', new Documentclass(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('documentclass');

  service.hooks(hooks);
};
