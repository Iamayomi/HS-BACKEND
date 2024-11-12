// Initializes the `vaccine` service on path `/vaccine`
const { Vaccine } = require('./vaccine.class');
const createModel = require('../../models/vaccine.model');
const hooks = require('./vaccine.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vaccine', new Vaccine(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vaccine');

  service.hooks(hooks);
};
