const assert = require('assert');
const app = require('../../src/app');

describe('\'problem\' service', () => {
  it('registered the service', () => {
    const service = app.service('problem');

    assert.ok(service, 'Registered the service');
  });
});
