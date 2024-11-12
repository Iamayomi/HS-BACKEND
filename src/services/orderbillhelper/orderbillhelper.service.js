// Initializes the `orderbillhelper` service on path `/orderbillhelper`
const { Orderbillhelper } = require('./orderbillhelper.class');
const createModel = require('../../models/orderbillhelper.model');
const hooks = require('./orderbillhelper.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/orderbillhelper', new Orderbillhelper(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('orderbillhelper');

  service.hooks(hooks);
};
