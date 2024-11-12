const assert = require('assert');
const app = require('../../src/app');

describe('\'acctransactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('acctransactions');

    assert.ok(service, 'Registered the service');
  });
});
