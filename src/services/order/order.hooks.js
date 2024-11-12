const { authenticate } = require('@feathersjs/authentication').hooks;

const groupOrderbyClient = require('../../hooks/group-orderby-client');

const createbill = require('../../hooks/createbill');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [groupOrderbyClient()],
    get: [],
    create: [],
    update: [],
    patch: [createbill()],
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
