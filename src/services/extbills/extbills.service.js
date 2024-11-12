// Initializes the `extbills` service on path `/extbills`
const { Extbills } = require('./extbills.class');
const createModel = require('../../models/extbills.model');
const hooks = require('./extbills.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extbills', new Extbills(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extbills');

  service.hooks(hooks);
};
