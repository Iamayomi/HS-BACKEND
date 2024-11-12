const assert = require('assert');
const app = require('../../src/app');

describe('\'HSModules\' service', () => {
  it('registered the service', () => {
    const service = app.service('hs-modules');

    assert.ok(service, 'Registered the service');
  });
});
