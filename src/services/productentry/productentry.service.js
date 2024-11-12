// Initializes the `productentry` service on path `/productentry`
const { Productentry } = require('./productentry.class');
const createModel = require('../../models/productentry.model');
const hooks = require('./productentry.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/productentry', new Productentry(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productentry');

  service.hooks(hooks);
};
