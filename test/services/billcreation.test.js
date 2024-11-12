const assert = require('assert');
const app = require('../../src/app');

describe('\'billcreation\' service', () => {
  it('registered the service', () => {
    const service = app.service('billcreation');

    assert.ok(service, 'Registered the service');
  });
});
