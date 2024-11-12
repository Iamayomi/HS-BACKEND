

const daylogin = require('../../hooks/daylogin');
const aggday = require('../../hooks/aggday');

module.exports = {
  before: {
    all: [],
    find: [daylogin()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [aggday()],
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
