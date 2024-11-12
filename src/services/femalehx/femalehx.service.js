// Initializes the `femalehx` service on path `/femalehx`
const { Femalehx } = require('./femalehx.class');
const createModel = require('../../models/femalehx.model');
const hooks = require('./femalehx.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/femalehx', new Femalehx(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('femalehx');

  service.hooks(hooks);
};
