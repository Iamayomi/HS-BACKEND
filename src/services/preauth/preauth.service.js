// Initializes the `preauth` service on path `/preauth`
const { Preauth } = require('./preauth.class');
const createModel = require('../../models/preauth.model');
const hooks = require('./preauth.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex', '$populate']
  };

  // Initialize our service with any options it requires
  app.use('/preauth', new Preauth(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('preauth');

  service.hooks(hooks);
};
