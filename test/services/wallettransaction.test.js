const assert = require('assert');
const app = require('../../src/app');

describe('\'wallettransaction\' service', () => {
  it('registered the service', () => {
    const service = app.service('wallettransaction');

    assert.ok(service, 'Registered the service');
  });
});
