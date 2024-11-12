// Initializes the `episodeOfCare` service on path `/episode-of-care`
const { EpisodeOfCare } = require('./episode-of-care.class');
const createModel = require('../../models/episode-of-care.model');
const hooks = require('./episode-of-care.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist:['$options','$regex']
  };

  // Initialize our service with any options it requires
  app.use('/episode-of-care', new EpisodeOfCare(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('episode-of-care');

  service.hooks(hooks);
};
