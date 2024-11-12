// Initializes the `paygtransc` service on path `/paygtransc`
const { Paygtransc } = require('./paygtransc.class');
const createModel = require('../../models/paygtransc.model');
const hooks = require('./paygtransc.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/paygtransc', new Paygtransc(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('paygtransc');

  service.hooks(hooks);
};
