const assert = require('assert');
const app = require('../../src/app');

describe('\'chartsofaccount\' service', () => {
  it('registered the service', () => {
    const service = app.service('chartsofaccount');

    assert.ok(service, 'Registered the service');
  });
});
