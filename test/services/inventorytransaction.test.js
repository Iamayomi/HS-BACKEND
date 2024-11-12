const assert = require('assert');
const app = require('../../src/app');

describe('\'inventorytransaction\' service', () => {
  it('registered the service', () => {
    const service = app.service('inventorytransaction');

    assert.ok(service, 'Registered the service');
  });
});
