const assert = require('assert');
const app = require('../../src/app');

describe('\'extpolicy\' service', () => {
  it('registered the service', () => {
    const service = app.service('extpolicy');

    assert.ok(service, 'Registered the service');
  });
});
