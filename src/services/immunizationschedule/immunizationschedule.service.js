// Initializes the `immunizationschedule` service on path `/immunizationschedule`
const { Immunizationschedule } = require('./immunizationschedule.class');
const createModel = require('../../models/immunizationschedule.model');
const hooks = require('./immunizationschedule.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/immunizationschedule', new Immunizationschedule(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('immunizationschedule');

  service.hooks(hooks);
};
