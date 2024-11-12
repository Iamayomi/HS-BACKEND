const assert = require('assert');
const app = require('../../src/app');

describe('\'vaccineprofile\' service', () => {
  it('registered the service', () => {
    const service = app.service('vaccineprofile');

    assert.ok(service, 'Registered the service');
  });
});
