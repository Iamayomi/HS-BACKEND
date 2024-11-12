const assert = require('assert');
const app = require('../../src/app');

describe('\'chatroom\' service', () => {
  it('registered the service', () => {
    const service = app.service('chatroom');

    assert.ok(service, 'Registered the service');
  });
});
