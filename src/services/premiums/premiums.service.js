// Initializes the `premiums` service on path `/premiums`
const { Premiums } = require('./premiums.class');
const createModel = require('../../models/premiums.model');
const hooks = require('./premiums.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/premiums', new Premiums(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('premiums');

  service.hooks(hooks);
};
