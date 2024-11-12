const { authenticate } = require('@feathersjs/authentication').hooks;

const cashinfo = require('../../hooks/cashinfo');

const creatempi = require('../../hooks/creatempi');
const paginatefalse = require('../../hooks/paginatefalse');

module.exports = {
  before: {
    all: [ ],
    find: [/* paginatefalse() */],
    get: [],
    create: [authenticate('jwt') ],
    update: [authenticate('jwt') ],
    patch: [],
    remove: [authenticate('jwt') ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [cashinfo(), creatempi()],
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
