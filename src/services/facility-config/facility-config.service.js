// Initializes the `facilityConfig` service on path `/facility-config`
const { FacilityConfig } = require('./facility-config.class');
const createModel = require('../../models/facility-config.model');
const hooks = require('./facility-config.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/facility-config', new FacilityConfig(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('facility-config');

  service.hooks(hooks);
};
