// Initializes the `healthplan` service on path `/healthplan`
const { Healthplan } = require('./healthplan.class');
const createModel = require('../../models/healthplan.model');
const hooks = require('./healthplan.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/healthplan', new Healthplan(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('healthplan');

  service.hooks(hooks);
};
