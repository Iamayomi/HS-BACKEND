const { authenticate } = require('@feathersjs/authentication').hooks;

const findsubwalletorcreate = require('../../hooks/findsubwalletorcreate');

const copysubwallet = require('../../hooks/copysubwallet');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [findsubwalletorcreate()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [copysubwallet()],
    update: [copysubwallet()],
    patch: [copysubwallet()],
    remove: [copysubwallet()]
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
