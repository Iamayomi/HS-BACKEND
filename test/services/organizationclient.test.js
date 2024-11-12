const assert = require('assert');
const app = require('../../src/app');

describe('\'organizationclient\' service', () => {
  it('registered the service', () => {
    const service = app.service('organizationclient');

    assert.ok(service, 'Registered the service');
  });
});
