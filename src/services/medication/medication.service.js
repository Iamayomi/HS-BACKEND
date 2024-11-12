// Initializes the `medication` service on path `/medication`
const { Medication } = require('./medication.class');
const createModel = require('../../models/medication.model');
const hooks = require('./medication.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/medication', new Medication(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medication');

  service.hooks(hooks);
};
