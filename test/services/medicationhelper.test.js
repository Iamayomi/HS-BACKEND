const assert = require('assert');
const app = require('../../src/app');

describe('\'medicationhelper\' service', () => {
  it('registered the service', () => {
    const service = app.service('medicationhelper');

    assert.ok(service, 'Registered the service');
  });
});
