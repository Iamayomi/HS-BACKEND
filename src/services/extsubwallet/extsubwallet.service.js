// Initializes the `extsubwallet` service on path `/extsubwallet`
const { Extsubwallet } = require('./extsubwallet.class');
const createModel = require('../../models/extsubwallet.model');
const hooks = require('./extsubwallet.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extsubwallet', new Extsubwallet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extsubwallet');

  service.hooks(hooks);
};
