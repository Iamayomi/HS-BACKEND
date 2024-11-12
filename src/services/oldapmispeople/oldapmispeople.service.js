// Initializes the `oldapmispeople` service on path `/oldapmispeople`
const { Oldapmispeople } = require('./oldapmispeople.class');
const createModel = require('../../models/oldapmispeople.model');
const hooks = require('./oldapmispeople.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/oldapmispeople', new Oldapmispeople(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('oldapmispeople');

  service.hooks(hooks);
};
