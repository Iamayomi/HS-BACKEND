// Initializes the `treatmentsheet` service on path `/treatmentsheet`
const { Treatmentsheet } = require('./treatmentsheet.class');
const createModel = require('../../models/treatmentsheet.model');
const hooks = require('./treatmentsheet.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/treatmentsheet', new Treatmentsheet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('treatmentsheet');

  service.hooks(hooks);
};
