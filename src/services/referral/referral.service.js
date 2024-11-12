// Initializes the `referral` service on path `/referral`
const { Referral } = require('./referral.class');
const createModel = require('../../models/referral.model');
const hooks = require('./referral.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/referral', new Referral(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('referral');

  service.hooks(hooks);
};
