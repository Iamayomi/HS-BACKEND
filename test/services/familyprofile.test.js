const assert = require('assert');
const app = require('../../src/app');

describe('\'familyprofile\' service', () => {
  it('registered the service', () => {
    const service = app.service('familyprofile');

    assert.ok(service, 'Registered the service');
  });
});
