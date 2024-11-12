const assert = require('assert');
const app = require('../../src/app');

describe('\'oldapmispeople\' service', () => {
  it('registered the service', () => {
    const service = app.service('oldapmispeople');

    assert.ok(service, 'Registered the service');
  });
});
