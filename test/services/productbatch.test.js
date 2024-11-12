const assert = require('assert');
const app = require('../../src/app');

describe('\'productbatch\' service', () => {
  it('registered the service', () => {
    const service = app.service('productbatch');

    assert.ok(service, 'Registered the service');
  });
});
