const assert = require('assert');
const app = require('../../src/app');

describe('\'encounter\' service', () => {
  it('registered the service', () => {
    const service = app.service('encounter');

    assert.ok(service, 'Registered the service');
  });
});
