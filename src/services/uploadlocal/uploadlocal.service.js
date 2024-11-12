// Initializes the `uploadlocal` service on path `/uploadlocal`
const { Uploadlocal } = require('./uploadlocal.class');
const createModel = require('../../models/uploadlocal.model');
const hooks = require('./uploadlocal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/uploadlocal', new Uploadlocal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('uploadlocal');

  service.hooks(hooks);
};
