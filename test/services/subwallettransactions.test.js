const assert = require('assert');
const app = require('../../src/app');

describe('\'subwallettransactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('subwallettransactions');

    assert.ok(service, 'Registered the service');
  });
});
