const assert = require('assert');
const app = require('../../src/app');

describe('\'epidmatch\' service', () => {
  it('registered the service', () => {
    const service = app.service('epidmatch');

    assert.ok(service, 'Registered the service');
  });
});
