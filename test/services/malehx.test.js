const assert = require('assert');
const app = require('../../src/app');

describe('\'malehx\' service', () => {
  it('registered the service', () => {
    const service = app.service('malehx');

    assert.ok(service, 'Registered the service');
  });
});
