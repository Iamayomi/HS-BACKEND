
const paginatefalse = require('../../hooks/paginatefalse');
const reshapedata = require('../../hooks/reshapedata');

module.exports = {
  before: {
    all: [],
    find: [paginatefalse()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [reshapedata()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
