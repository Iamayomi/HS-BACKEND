const assert = require('assert');
const app = require('../../src/app');

describe('\'labrefvalue\' service', () => {
  it('registered the service', () => {
    const service = app.service('labrefvalue');

    assert.ok(service, 'Registered the service');
  });
});
