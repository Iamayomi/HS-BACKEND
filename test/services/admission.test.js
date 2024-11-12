const assert = require('assert');
const app = require('../../src/app');

describe('\'admission\' service', () => {
  it('registered the service', () => {
    const service = app.service('admission');

    assert.ok(service, 'Registered the service');
  });
});
