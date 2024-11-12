// Initializes the `labresults` service on path `/labresults`
const { Labresults } = require('./labresults.class');
const createModel = require('../../models/labresults.model');
const hooks = require('./labresults.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/labresults', new Labresults(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('labresults');

  service.hooks(hooks);
};
