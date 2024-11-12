// Initializes the `payanalytics` service on path `/payanalytics`
const { Payanalytics } = require('./payanalytics.class');
const createModel = require('../../models/payanalytics.model');
const hooks = require('./payanalytics.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/payanalytics', new Payanalytics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('payanalytics');

  service.hooks(hooks);
};
