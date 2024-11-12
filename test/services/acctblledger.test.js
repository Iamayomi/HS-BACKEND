const assert = require('assert');
const app = require('../../src/app');

describe('\'acctblledger\' service', () => {
  it('registered the service', () => {
    const service = app.service('acctblledger');

    assert.ok(service, 'Registered the service');
  });
});
