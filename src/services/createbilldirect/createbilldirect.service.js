// Initializes the `createbilldirect` service on path `/createbilldirect`
const { Createbilldirect } = require('./createbilldirect.class');
const hooks = require('./createbilldirect.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/createbilldirect', new Createbilldirect(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('createbilldirect');

  service.hooks(hooks);
};
