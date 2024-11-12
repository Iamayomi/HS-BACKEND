const assert = require('assert');
const app = require('../../src/app');

describe('\'oldapmispatient\' service', () => {
  it('registered the service', () => {
    const service = app.service('oldapmispatient');

    assert.ok(service, 'Registered the service');
  });
});
