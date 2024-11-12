// Initializes the `familyprofile` service on path `/familyprofile`
const { Familyprofile } = require('./familyprofile.class');
const createModel = require('../../models/familyprofile.model');
const hooks = require('./familyprofile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/familyprofile', new Familyprofile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('familyprofile');

  service.hooks(hooks);
};
