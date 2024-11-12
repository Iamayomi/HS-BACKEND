// Initializes the `templatedoc` service on path `/templatedoc`
const { Templatedoc } = require('./templatedoc.class');
const createModel = require('../../models/templatedoc.model');
const hooks = require('./templatedoc.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/templatedoc', new Templatedoc(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('templatedoc');

  service.hooks(hooks);
};
