// Initializes the `deptUnit` service on path `/dept-unit`
const { DeptUnit } = require('./dept-unit.class');
const createModel = require('../../models/dept-unit.model');
const hooks = require('./dept-unit.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/dept-unit', new DeptUnit(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dept-unit');

  service.hooks(hooks);
};
