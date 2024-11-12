

const updateinventoryfromtransfer = require('../../hooks/updateinventoryfromtransfer');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [updateinventoryfromtransfer()],
    update: [],
    patch: [updateinventoryfromtransfer()],
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
