// Initializes the `fintrx` service on path `/fintrx`
const { Fintrx } = require('./fintrx.class');
const createModel = require('../../models/fintrx.model');
const hooks = require('./fintrx.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fintrx', new Fintrx(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fintrx');

  service.hooks(hooks);
};
