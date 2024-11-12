// Initializes the `accreditation` service on path `/accreditation`
const { Accreditation } = require('./accreditation.class');
const createModel = require('../../models/accreditation.model');
const hooks = require('./accreditation.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/accreditation', new Accreditation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accreditation');

  service.hooks(hooks);
};
