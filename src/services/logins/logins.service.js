// Initializes the `logins` service on path `/logins`
const { Logins } = require('./logins.class');
const createModel = require('../../models/logins.model');
const hooks = require('./logins.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/logins', new Logins(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('logins');

  service.hooks(hooks);
};
