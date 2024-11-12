const assert = require('assert');
const app = require('../../src/app');

describe('\'createbilldirect\' service', () => {
  it('registered the service', () => {
    const service = app.service('createbilldirect');

    assert.ok(service, 'Registered the service');
  });
});
