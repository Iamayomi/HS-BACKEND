const assert = require('assert');
const app = require('../../src/app');

describe('\'fintrx\' service', () => {
  it('registered the service', () => {
    const service = app.service('fintrx');

    assert.ok(service, 'Registered the service');
  });
});
