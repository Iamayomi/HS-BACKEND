const assert = require('assert');
const app = require('../../src/app');

describe('\'templatedoc\' service', () => {
  it('registered the service', () => {
    const service = app.service('templatedoc');

    assert.ok(service, 'Registered the service');
  });
});
