const assert = require('assert');
const app = require('../../src/app');

describe('\'extbills\' service', () => {
  it('registered the service', () => {
    const service = app.service('extbills');

    assert.ok(service, 'Registered the service');
  });
});
