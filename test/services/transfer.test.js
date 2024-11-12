const assert = require('assert');
const app = require('../../src/app');

describe('\'transfer\' service', () => {
  it('registered the service', () => {
    const service = app.service('transfer');

    assert.ok(service, 'Registered the service');
  });
});
