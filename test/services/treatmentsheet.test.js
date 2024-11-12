const assert = require('assert');
const app = require('../../src/app');

describe('\'treatmentsheet\' service', () => {
  it('registered the service', () => {
    const service = app.service('treatmentsheet');

    assert.ok(service, 'Registered the service');
  });
});
