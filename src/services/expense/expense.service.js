// Initializes the `expense` service on path `/expense`
const { Expense } = require('./expense.class');
const createModel = require('../../models/expense.model');
const hooks = require('./expense.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/expense', new Expense(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('expense');

  service.hooks(hooks);
};
