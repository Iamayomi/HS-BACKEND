// Initializes the `facility` service on path `/facility`
const { Facility } = require('./facility.class');
const createModel = require('../../models/facility.model');
const hooks = require('./facility.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/facility', new Facility(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('facility');

  service.hooks(hooks);
};
