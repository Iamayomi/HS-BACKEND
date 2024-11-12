// Initializes the `accorder_details` service on path `/accorder-details`
const { AccorderDetails } = require('./accorder_details.class');
const createModel = require('../../models/accorder_details.model');
const hooks = require('./accorder_details.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/accorder-details', new AccorderDetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accorder-details');

  service.hooks(hooks);
};
