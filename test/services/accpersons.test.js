const assert = require('assert');
const app = require('../../src/app');

describe('\'accpersons\' service', () => {
  it('registered the service', () => {
    const service = app.service('accpersons');

    assert.ok(service, 'Registered the service');
  });
});
