// Initializes the `acctblledger` service on path `/acctblledger`
const { Acctblledger } = require('./acctblledger.class');
const createModel = require('../../models/acctblledger.model');
const hooks = require('./acctblledger.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/acctblledger', new Acctblledger(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('acctblledger');

  service.hooks(hooks);
};
