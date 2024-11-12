const assert = require('assert');
const app = require('../../src/app');

describe('\'hmoanalytics\' service', () => {
  it('registered the service', () => {
    const service = app.service('hmoanalytics');

    assert.ok(service, 'Registered the service');
  });
});
