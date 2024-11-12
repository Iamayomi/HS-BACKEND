const assert = require('assert');
const app = require('../../src/app');

describe('\'bands\' service', () => {
  it('registered the service', () => {
    const service = app.service('bands');

    assert.ok(service, 'Registered the service');
  });
});
