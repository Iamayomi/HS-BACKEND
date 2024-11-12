const assert = require('assert');
const app = require('../../src/app');

describe('\'payanalytics\' service', () => {
  it('registered the service', () => {
    const service = app.service('payanalytics');

    assert.ok(service, 'Registered the service');
  });
});
