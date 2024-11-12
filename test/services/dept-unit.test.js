const assert = require('assert');
const app = require('../../src/app');

describe('\'deptUnit\' service', () => {
  it('registered the service', () => {
    const service = app.service('dept-unit');

    assert.ok(service, 'Registered the service');
  });
});
