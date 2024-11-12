const assert = require('assert');
const app = require('../../src/app');

describe('\'healthplan\' service', () => {
  it('registered the service', () => {
    const service = app.service('healthplan');

    assert.ok(service, 'Registered the service');
  });
});
