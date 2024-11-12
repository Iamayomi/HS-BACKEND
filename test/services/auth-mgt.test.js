const assert = require('assert');
const app = require('../../src/app');

describe('\'authMgt\' service', () => {
  it('registered the service', () => {
    const service = app.service('auth-mgt');

    assert.ok(service, 'Registered the service');
  });
});
