const assert = require('assert');
const app = require('../../src/app');

describe('\'fundmgt\' service', () => {
  it('registered the service', () => {
    const service = app.service('fundmgt');

    assert.ok(service, 'Registered the service');
  });
});
