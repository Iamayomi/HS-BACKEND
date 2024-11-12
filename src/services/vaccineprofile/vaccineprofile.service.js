// Initializes the `vaccineprofile` service on path `/vaccineprofile`
const { Vaccineprofile } = require('./vaccineprofile.class');
const createModel = require('../../models/vaccineprofile.model');
const hooks = require('./vaccineprofile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vaccineprofile', new Vaccineprofile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vaccineprofile');

  service.hooks(hooks);
};
