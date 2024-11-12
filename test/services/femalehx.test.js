const assert = require('assert');
const app = require('../../src/app');

describe('\'femalehx\' service', () => {
  it('registered the service', () => {
    const service = app.service('femalehx');

    assert.ok(service, 'Registered the service');
  });
});
