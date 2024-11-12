// Initializes the `fundmgt` service on path `/fundmgt`
const { Fundmgt } = require('./fundmgt.class');
const createModel = require('../../models/fundmgt.model');
const hooks = require('./fundmgt.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fundmgt', new Fundmgt(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fundmgt');

  service.hooks(hooks);
};
