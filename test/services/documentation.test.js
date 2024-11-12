const assert = require('assert');
const app = require('../../src/app');

describe('\'documentation\' service', () => {
  it('registered the service', () => {
    const service = app.service('documentation');

    assert.ok(service, 'Registered the service');
  });
});
