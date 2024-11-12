const assert = require('assert');
const app = require('../../src/app');

describe('\'clinicaldocument\' service', () => {
  it('registered the service', () => {
    const service = app.service('clinicaldocument');

    assert.ok(service, 'Registered the service');
  });
});
