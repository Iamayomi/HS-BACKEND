// Initializes the `extpolicy` service on path `/extpolicy`
const { Extpolicy } = require('./extpolicy.class');
const createModel = require('../../models/extpolicy.model');
const hooks = require('./extpolicy.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extpolicy', new Extpolicy(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extpolicy');

  service.hooks(hooks);
};
