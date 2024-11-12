const assert = require('assert');
const app = require('../../src/app');

describe('\'subwallettranasactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('subwallettranasactions');

    assert.ok(service, 'Registered the service');
  });
});
