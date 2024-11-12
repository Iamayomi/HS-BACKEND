const assert = require('assert');
const app = require('../../src/app');

describe('\'extsubwallet\' service', () => {
  it('registered the service', () => {
    const service = app.service('extsubwallet');

    assert.ok(service, 'Registered the service');
  });
});
