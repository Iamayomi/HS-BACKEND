// Initializes the `mei` service on path `/mei`
const { Mei } = require('./mei.class');
const createModel = require('../../models/mei.model');
const hooks = require('./mei.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mei', new Mei(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mei');

  service.hooks(hooks);
};
