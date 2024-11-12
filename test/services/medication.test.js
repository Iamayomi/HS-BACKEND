const assert = require('assert');
const app = require('../../src/app');

describe('\'medication\' service', () => {
  it('registered the service', () => {
    const service = app.service('medication');

    assert.ok(service, 'Registered the service');
  });
});
