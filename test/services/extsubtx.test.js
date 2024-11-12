const assert = require('assert');
const app = require('../../src/app');

describe('\'extsubtx\' service', () => {
  it('registered the service', () => {
    const service = app.service('extsubtx');

    assert.ok(service, 'Registered the service');
  });
});
