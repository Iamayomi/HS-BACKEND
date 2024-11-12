const assert = require('assert');
const app = require('../../src/app');

describe('\'preauth\' service', () => {
  it('registered the service', () => {
    const service = app.service('preauth');

    assert.ok(service, 'Registered the service');
  });
});
