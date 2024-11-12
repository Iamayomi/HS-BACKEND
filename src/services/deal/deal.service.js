// Initializes the `deal` service on path `/deal`
const { Deal } = require('./deal.class');
const createModel = require('../../models/deal.model');
const hooks = require('./deal.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/deal', new Deal(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('deal');

  service.hooks(hooks);
};
