// Initializes the `accpersons` service on path `/accpersons`
const { Accpersons } = require('./accpersons.class');
const createModel = require('../../models/accpersons.model');
const hooks = require('./accpersons.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/accpersons', new Accpersons(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accpersons');

  service.hooks(hooks);
};
