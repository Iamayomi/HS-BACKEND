// Initializes the `hmoanalytics` service on path `/hmoanalytics`
const { Hmoanalytics } = require('./hmoanalytics.class');
const createModel = require('../../models/hmoanalytics.model');
const hooks = require('./hmoanalytics.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hmoanalytics', new Hmoanalytics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hmoanalytics');

  service.hooks(hooks);
};
