// Initializes the `HSModules` service on path `/hs-modules`
const { HsModules } = require('./hs-modules.class');
const createModel = require('../../models/hs-modules.model');
const hooks = require('./hs-modules.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/hs-modules', new HsModules(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hs-modules');

  service.hooks(hooks);
};
