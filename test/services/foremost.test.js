const assert = require('assert');
const app = require('../../src/app');

describe('\'foremost\' service', () => {
  it('registered the service', () => {
    const service = app.service('foremost');

    assert.ok(service, 'Registered the service');
  });
});
