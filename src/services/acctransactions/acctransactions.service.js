// Initializes the `acctransactions` service on path `/acctransactions`
const { Acctransactions } = require('./acctransactions.class');
const createModel = require('../../models/acctransactions.model');
const hooks = require('./acctransactions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/acctransactions', new Acctransactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('acctransactions');

  service.hooks(hooks);
};
