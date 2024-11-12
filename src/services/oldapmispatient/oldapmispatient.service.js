// Initializes the `oldapmispatient` service on path `/oldapmispatient`
const { Oldapmispatient } = require('./oldapmispatient.class');
const createModel = require('../../models/oldapmispatient.model');
const hooks = require('./oldapmispatient.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/oldapmispatient', new Oldapmispatient(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('oldapmispatient');

  service.hooks(hooks);
};
