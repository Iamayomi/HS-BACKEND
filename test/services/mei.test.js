const assert = require('assert');
const app = require('../../src/app');

describe('\'mei\' service', () => {
  it('registered the service', () => {
    const service = app.service('mei');

    assert.ok(service, 'Registered the service');
  });
});
