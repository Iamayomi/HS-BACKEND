// Initializes the `epidalerts` service on path `/epidalerts`
const { Epidalerts } = require('./epidalerts.class');
const createModel = require('../../models/epidalerts.model');
const hooks = require('./epidalerts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/epidalerts', new Epidalerts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('epidalerts');

  service.hooks(hooks);
};
