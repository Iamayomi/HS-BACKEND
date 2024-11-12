const assert = require('assert');
const app = require('../../src/app');

describe('\'policy\' service', () => {
  it('registered the service', () => {
    const service = app.service('policy');

    assert.ok(service, 'Registered the service');
  });
});
