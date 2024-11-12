// Initializes the `wallettransaction` service on path `/wallettransaction`
const { Wallettransaction } = require('./wallettransaction.class');
const createModel = require('../../models/wallettransaction.model');
const hooks = require('./wallettransaction.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/wallettransaction', new Wallettransaction(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('wallettransaction');

  service.hooks(hooks);
};
