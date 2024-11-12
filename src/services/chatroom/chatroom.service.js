// Initializes the `chatroom` service on path `/chatroom`
const { Chatroom } = require('./chatroom.class');
const createModel = require('../../models/chatroom.model');
const hooks = require('./chatroom.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/chatroom', new Chatroom(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('chatroom');

  service.hooks(hooks);
};
