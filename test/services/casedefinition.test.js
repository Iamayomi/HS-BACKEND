const assert = require('assert');
const app = require('../../src/app');

describe('\'casedefinition\' service', () => {
  it('registered the service', () => {
    const service = app.service('casedefinition');

    assert.ok(service, 'Registered the service');
  });
});
