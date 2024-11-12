const assert = require('assert');
const app = require('../../src/app');

describe('\'roaster\' service', () => {
  it('registered the service', () => {
    const service = app.service('roaster');

    assert.ok(service, 'Registered the service');
  });
});
