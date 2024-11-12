const assert = require('assert');
const app = require('../../src/app');

describe('\'referral\' service', () => {
  it('registered the service', () => {
    const service = app.service('referral');

    assert.ok(service, 'Registered the service');
  });
});
