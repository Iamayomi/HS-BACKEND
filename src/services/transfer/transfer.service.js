// Initializes the `transfer` service on path `/transfer`
const { Transfer } = require('./transfer.class');
const createModel = require('../../models/transfer.model');
const hooks = require('./transfer.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/transfer', new Transfer(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('transfer');

  service.hooks(hooks);
};
