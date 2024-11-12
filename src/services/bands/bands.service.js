// Initializes the `bands` service on path `/bands`
const { Bands } = require('./bands.class');
const createModel = require('../../models/bands.model');
const hooks = require('./bands.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bands', new Bands(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bands');

  service.hooks(hooks);
};
