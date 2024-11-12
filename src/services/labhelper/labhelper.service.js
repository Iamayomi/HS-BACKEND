// Initializes the `labhelper` service on path `/labhelper`
const { Labhelper } = require('./labhelper.class');
const createModel = require('../../models/labhelper.model');
const hooks = require('./labhelper.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/labhelper', new Labhelper(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('labhelper');

  service.hooks(hooks);
};
