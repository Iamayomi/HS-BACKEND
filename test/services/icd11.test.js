const assert = require('assert');
const app = require('../../src/app');

describe('\'icd11\' service', () => {
  it('registered the service', () => {
    const service = app.service('icd-11');

    assert.ok(service, 'Registered the service');
  });
});
