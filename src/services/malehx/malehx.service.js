// Initializes the `malehx` service on path `/malehx`
const { Malehx } = require('./malehx.class');
const createModel = require('../../models/malehx.model');
const hooks = require('./malehx.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/malehx', new Malehx(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('malehx');

  service.hooks(hooks);
};
