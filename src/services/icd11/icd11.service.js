// Initializes the `icd11` service on path `/icd-11`
const { Icd11 } = require('./icd11.class');
const createModel = require('../../models/icd11.model');
const hooks = require('./icd11.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/icd-11', new Icd11(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('icd-11');

  service.hooks(hooks);
};
