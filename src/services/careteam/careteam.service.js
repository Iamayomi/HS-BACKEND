// Initializes the `careteam` service on path `/careteam`
const { Careteam } = require('./careteam.class');
const createModel = require('../../models/careteam.model');
const hooks = require('./careteam.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/careteam', new Careteam(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('careteam');

  service.hooks(hooks);
};
