// Initializes the `chartsofaccount` service on path `/chartsofaccount`
const { Chartsofaccount } = require('./chartsofaccount.class');
const createModel = require('../../models/chartsofaccount.model');
const hooks = require('./chartsofaccount.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/chartsofaccount', new Chartsofaccount(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chartsofaccount');

  service.hooks(hooks);
};
