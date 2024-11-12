const assert = require('assert');
const app = require('../../src/app');

describe('\'workspace\' service', () => {
  it('registered the service', () => {
    const service = app.service('workspace');

    assert.ok(service, 'Registered the service');
  });
});
