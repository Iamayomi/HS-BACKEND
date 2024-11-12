// Initializes the `wallet` service on path `/wallet`
const { Wallet } = require('./wallet.class');
const createModel = require('../../models/wallet.model');
const hooks = require('./wallet.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/wallet', new Wallet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('wallet');

  service.hooks(hooks);
};
