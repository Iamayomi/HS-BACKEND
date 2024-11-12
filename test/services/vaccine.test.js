const assert = require('assert');
const app = require('../../src/app');

describe('\'vaccine\' service', () => {
  it('registered the service', () => {
    const service = app.service('vaccine');

    assert.ok(service, 'Registered the service');
  });
});
