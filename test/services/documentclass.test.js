const assert = require('assert');
const app = require('../../src/app');

describe('\'documentclass\' service', () => {
  it('registered the service', () => {
    const service = app.service('documentclass');

    assert.ok(service, 'Registered the service');
  });
});
