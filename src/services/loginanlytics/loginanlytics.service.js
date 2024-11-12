// Initializes the `loginanlytics` service on path `/y`
const { Loginanlytics } = require('./loginanlytics.class');
const createModel = require('../../models/loginanlytics.model');
const hooks = require('./loginanlytics.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/loginanlytics', new Loginanlytics(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('loginanlytics');

  service.hooks(hooks);
};
