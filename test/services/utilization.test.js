const assert = require('assert');
const app = require('../../src/app');

describe('\'utilization\' service', () => {
  it('registered the service', () => {
    const service = app.service('utilization');

    assert.ok(service, 'Registered the service');
  });
});
