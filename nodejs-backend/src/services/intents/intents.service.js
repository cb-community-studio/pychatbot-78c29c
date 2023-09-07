const { Intents } = require('./intents.class');
const createModel = require('../../models/intents.model');
const hooks = require('./intents.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/intents', new Intents(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('intents');

  service.hooks(hooks);
};