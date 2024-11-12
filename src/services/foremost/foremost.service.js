// Initializes the `foremost` service on path `/foremost`
const { Foremost } = require('./foremost.class');
const createModel = require('../../models/foremost.model');
const hooks = require('./foremost.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/foremost', new Foremost(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('foremost');

  service.hooks(hooks);
};
