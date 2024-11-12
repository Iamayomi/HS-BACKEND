// Initializes the `subwallet` service on path `/subwallet`
const { Subwallet } = require('./subwallet.class');
const createModel = require('../../models/subwallet.model');
const hooks = require('./subwallet.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/subwallet', new Subwallet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('subwallet');

  service.hooks(hooks);
};
