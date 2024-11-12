const assert = require('assert');
const app = require('../../src/app');

describe('\'facility\' service', () => {
  it('registered the service', () => {
    const service = app.service('facility');

    assert.ok(service, 'Registered the service');
  });
});
