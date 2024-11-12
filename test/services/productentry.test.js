const assert = require('assert');
const app = require('../../src/app');

describe('\'productentry\' service', () => {
  it('registered the service', () => {
    const service = app.service('productentry');

    assert.ok(service, 'Registered the service');
  });
});
