// Initializes the `sendsms` service on path `/sendsms`
const { Sendsms } = require('./sendsms.class');
const createModel = require('../../models/sendsms.model');
const hooks = require('./sendsms.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sendsms', new Sendsms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sendsms');

  service.hooks(hooks);
};
