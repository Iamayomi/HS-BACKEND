// Initializes the `roaster` service on path `/roaster`
const { Roaster } = require('./roaster.class');
const createModel = require('../../models/roaster.model');
const hooks = require('./roaster.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/roaster', new Roaster(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('roaster');

  service.hooks(hooks);
};
