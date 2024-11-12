const assert = require('assert');
const app = require('../../src/app');

describe('\'logins\' service', () => {
  it('registered the service', () => {
    const service = app.service('logins');

    assert.ok(service, 'Registered the service');
  });
});
