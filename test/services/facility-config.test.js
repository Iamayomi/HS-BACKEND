const assert = require('assert');
const app = require('../../src/app');

describe('\'facilityConfig\' service', () => {
  it('registered the service', () => {
    const service = app.service('facility-config');

    assert.ok(service, 'Registered the service');
  });
});
