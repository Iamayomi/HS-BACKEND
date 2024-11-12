const assert = require('assert');
const app = require('../../src/app');

describe('\'mpi\' service', () => {
  it('registered the service', () => {
    const service = app.service('mpi');

    assert.ok(service, 'Registered the service');
  });
});
