const assert = require('assert');
const app = require('../../src/app');

describe('\'corpinvoices\' service', () => {
  it('registered the service', () => {
    const service = app.service('corpinvoices');

    assert.ok(service, 'Registered the service');
  });
});
