// Initializes the `extsubtx` service on path `/extsubtx`
const { Extsubtx } = require('./extsubtx.class');
const createModel = require('../../models/extsubtx.model');
const hooks = require('./extsubtx.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extsubtx', new Extsubtx(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extsubtx');

  service.hooks(hooks);
};
