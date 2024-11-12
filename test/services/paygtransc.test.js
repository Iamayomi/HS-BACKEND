const assert = require('assert');
const app = require('../../src/app');

describe('\'paygtransc\' service', () => {
  it('registered the service', () => {
    const service = app.service('paygtransc');

    assert.ok(service, 'Registered the service');
  });
});
