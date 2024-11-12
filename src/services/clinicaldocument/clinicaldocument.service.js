// Initializes the `clinicaldocument` service on path `/clinicaldocument`
const { Clinicaldocument } = require('./clinicaldocument.class');
const createModel = require('../../models/clinicaldocument.model');
const hooks = require('./clinicaldocument.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/clinicaldocument', new Clinicaldocument(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('clinicaldocument');

  service.hooks(hooks);
};
