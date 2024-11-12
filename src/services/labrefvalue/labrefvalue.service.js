// Initializes the `labrefvalue` service on path `/labrefvalue`
const { Labrefvalue } = require('./labrefvalue.class');
const createModel = require('../../models/labrefvalue.model');
const hooks = require('./labrefvalue.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/labrefvalue', new Labrefvalue(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('labrefvalue');

  service.hooks(hooks);
};
