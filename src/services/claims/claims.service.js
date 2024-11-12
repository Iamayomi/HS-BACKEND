// Initializes the `claims` service on path `/claims`
const { Claims } = require('./claims.class');
const createModel = require('../../models/claims.model');
const hooks = require('./claims.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/claims', new Claims(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('claims');

  service.hooks(hooks);
};
