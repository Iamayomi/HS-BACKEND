// Initializes the `providerpayment` service on path `/providerpayment`
const { Providerpayment } = require('./providerpayment.class');
const createModel = require('../../models/providerpayment.model');
const hooks = require('./providerpayment.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/providerpayment', new Providerpayment(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('providerpayment');

  service.hooks(hooks);
};
