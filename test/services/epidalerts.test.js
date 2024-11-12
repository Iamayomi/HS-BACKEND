const assert = require('assert');
const app = require('../../src/app');

describe('\'epidalerts\' service', () => {
  it('registered the service', () => {
    const service = app.service('epidalerts');

    assert.ok(service, 'Registered the service');
  });
});
