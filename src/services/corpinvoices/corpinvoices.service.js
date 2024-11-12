// Initializes the `corpinvoices` service on path `/corpinvoices`
const { Corpinvoices } = require('./corpinvoices.class');
const createModel = require('../../models/corpinvoices.model');
const hooks = require('./corpinvoices.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/corpinvoices', new Corpinvoices(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('corpinvoices');

  service.hooks(hooks);
};
