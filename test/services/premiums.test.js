const assert = require('assert');
const app = require('../../src/app');

describe('\'premiums\' service', () => {
  it('registered the service', () => {
    const service = app.service('premiums');

    assert.ok(service, 'Registered the service');
  });
});
