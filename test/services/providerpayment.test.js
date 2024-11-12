const assert = require('assert');
const app = require('../../src/app');

describe('\'providerpayment\' service', () => {
  it('registered the service', () => {
    const service = app.service('providerpayment');

    assert.ok(service, 'Registered the service');
  });
});
