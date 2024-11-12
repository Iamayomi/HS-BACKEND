// Initializes the `medicationhelper` service on path `/medicationhelper`
const { Medicationhelper } = require('./medicationhelper.class');
const createModel = require('../../models/medicationhelper.model');
const hooks = require('./medicationhelper.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/medicationhelper', new Medicationhelper(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medicationhelper');

  service.hooks(hooks);
};
