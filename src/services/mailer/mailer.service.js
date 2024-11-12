// Initializes the `mailer` service on path `/mailer`
//const { Mailer } = require('./mailer.class');
//const createModel = require('../../models/mailer.model');
const hooks = require('./mailer.hooks');
const Mailer = require('feathers-mailer');
const sgTransport = require('nodemailer-sendgrid-transport');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/mailer', Mailer(sgTransport({
    auth: {
      api_key: app.get('sendgridApiKey'),
    }
  }))
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('mailer');

  service.hooks(hooks);
};
