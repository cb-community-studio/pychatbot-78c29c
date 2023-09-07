const assert = require('assert');
const app = require('../../src/app');

describe('\'intents\' service', () => {
  it('registered the service', () => {
    const service = app.service('intents');

    assert.ok(service, 'Registered the service (intents)');
  });
});
