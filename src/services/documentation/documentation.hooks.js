const { authenticate } = require('@feathersjs/authentication').hooks;

const paginatefalse = require('../../hooks/paginatefalse');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [/* paginatefalse() */],
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
