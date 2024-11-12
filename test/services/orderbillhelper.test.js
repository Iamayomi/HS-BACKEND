const assert = require('assert');
const app = require('../../src/app');

describe('\'orderbillhelper\' service', () => {
  it('registered the service', () => {
    const service = app.service('orderbillhelper');

    assert.ok(service, 'Registered the service');
  });
});
