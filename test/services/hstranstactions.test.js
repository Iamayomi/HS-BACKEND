const assert = require('assert');
const app = require('../../src/app');

describe('\'hstranstactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('hstranstactions');

    assert.ok(service, 'Registered the service');
  });
});
