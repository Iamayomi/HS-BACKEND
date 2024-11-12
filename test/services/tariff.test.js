const assert = require('assert');
const app = require('../../src/app');

describe('\'tariff\' service', () => {
  it('registered the service', () => {
    const service = app.service('tariff');

    assert.ok(service, 'Registered the service');
  });
});
