// Initializes the `admission` service on path `/admission`
const { Admission } = require('./admission.class');
const createModel = require('../../models/admission.model');
const hooks = require('./admission.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/admission', new Admission(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('admission');

  service.hooks(hooks);
};
