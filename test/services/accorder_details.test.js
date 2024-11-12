const assert = require('assert');
const app = require('../../src/app');

describe('\'accorder_details\' service', () => {
  it('registered the service', () => {
    const service = app.service('accorder-details');

    assert.ok(service, 'Registered the service');
  });
});
