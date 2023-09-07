const users = require("./users/users.service.js");
const intents = require("./intents/intents.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(intents);
  // ~cb-add-configure-service-name~
};
