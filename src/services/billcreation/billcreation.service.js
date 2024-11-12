// Initializes the `billcreation` service on path `/billcreation`
const { Billcreation } = require('./billcreation.class');
const createModel = require('../../models/billcreation.model');
const hooks = require('./billcreation.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/billcreation', new Billcreation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('billcreation');

  service.hooks(hooks);
};
