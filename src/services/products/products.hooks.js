const { authenticate } = require('@feathersjs/authentication').hooks;
const paginatefalse = require('../../hooks/paginatefalse');

const uniqueentry = require('../../hooks/uniqueentry');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [/* paginatefalse() */],
    get: [],
    create: [uniqueentry()],
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
