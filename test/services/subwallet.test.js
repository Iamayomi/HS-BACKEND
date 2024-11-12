const assert = require('assert');
const app = require('../../src/app');

describe('\'subwallet\' service', () => {
  it('registered the service', () => {
    const service = app.service('subwallet');

    assert.ok(service, 'Registered the service');
  });
});
