// Initializes the `productbatch` service on path `/productbatch`
const { Productbatch } = require('./productbatch.class');
const createModel = require('../../models/productbatch.model');
const hooks = require('./productbatch.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/productbatch', new Productbatch(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productbatch');

  service.hooks(hooks);
};
