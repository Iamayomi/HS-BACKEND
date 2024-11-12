const assert = require('assert');
const app = require('../../src/app');

describe('\'sendsms\' service', () => {
  it('registered the service', () => {
    const service = app.service('sendsms');

    assert.ok(service, 'Registered the service');
  });
});
