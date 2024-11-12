const assert = require('assert');
const app = require('../../src/app');

describe('\'labhelper\' service', () => {
  it('registered the service', () => {
    const service = app.service('labhelper');

    assert.ok(service, 'Registered the service');
  });
});
