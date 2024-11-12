const assert = require('assert');
const app = require('../../src/app');

describe('\'chartaccounts\' service', () => {
  it('registered the service', () => {
    const service = app.service('chartaccounts');

    assert.ok(service, 'Registered the service');
  });
});
