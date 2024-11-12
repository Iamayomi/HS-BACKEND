// Initializes the `whatsappapi` service on path `/whatsappapi`
const { Whatsappapi } = require('./whatsappapi.class');
const createModel = require('../../models/whatsappapi.model');
const hooks = require('./whatsappapi.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/whatsappapi', new Whatsappapi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('whatsappapi');

  service.hooks(hooks);
};
