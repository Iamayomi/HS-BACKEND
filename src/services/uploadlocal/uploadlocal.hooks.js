

const localupload = require('../../hooks/localupload');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [localupload()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
