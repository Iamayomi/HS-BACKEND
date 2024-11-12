const assert = require('assert');
const app = require('../../src/app');

describe('\'careteam\' service', () => {
  it('registered the service', () => {
    const service = app.service('careteam');

    assert.ok(service, 'Registered the service');
  });
});
