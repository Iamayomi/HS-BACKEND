

const findextsubwallet = require('../../hooks/findextsubwallet');

module.exports = {
  before: {
    all: [],
    find: [/* findextsubwallet() */],
    get: [/* findextsubwallet() */],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [ /* findextsubwallet() */],
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
