// Initializes the `mpi` service on path `/mpi`
const { Mpi } = require('./mpi.class');
const createModel = require('../../models/mpi.model');
const hooks = require('./mpi.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mpi', new Mpi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mpi');

  service.hooks(hooks);
};
