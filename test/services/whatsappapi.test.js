const assert = require('assert');
const app = require('../../src/app');

describe('\'whatsappapi\' service', () => {
  it('registered the service', () => {
    const service = app.service('whatsappapi');

    assert.ok(service, 'Registered the service');
  });
});
