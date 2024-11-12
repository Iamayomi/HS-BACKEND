// Initializes the `hstranstactions` service on path `/hstranstactions`
const { Hstranstactions } = require('./hstranstactions.class');
const createModel = require('../../models/hstranstactions.model');
const hooks = require('./hstranstactions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hstranstactions', new Hstranstactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hstranstactions');

  service.hooks(hooks);
};
