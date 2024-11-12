// Initializes the `problem` service on path `/problem`
const { Problem } = require('./problem.class');
const createModel = require('../../models/problem.model');
const hooks = require('./problem.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/problem', new Problem(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('problem');

  service.hooks(hooks);
};
