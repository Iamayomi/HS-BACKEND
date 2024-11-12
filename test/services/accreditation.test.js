const assert = require('assert');
const app = require('../../src/app');

describe('\'accreditation\' service', () => {
  it('registered the service', () => {
    const service = app.service('accreditation');

    assert.ok(service, 'Registered the service');
  });
});
