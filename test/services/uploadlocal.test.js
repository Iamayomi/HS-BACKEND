const assert = require('assert');
const app = require('../../src/app');

describe('\'uploadlocal\' service', () => {
  it('registered the service', () => {
    const service = app.service('uploadlocal');

    assert.ok(service, 'Registered the service');
  });
});
