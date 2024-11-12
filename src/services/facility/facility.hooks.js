const { authenticate } = require('@feathersjs/authentication').hooks;

const singlesignup = require('../../hooks/singlesignup');
const paginatefalse = require('../../hooks/paginatefalse');
const uniquefacility = require('../../hooks/uniquefacility');

const createinvoice = require('../../hooks/createinvoice');

module.exports = {
  before: {
    all: [/*  authenticate('jwt') */ ],
    find: [/* paginatefalse() */],
    get: [],
    create: [uniquefacility()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [singlesignup(), /* createinvoice() */],
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
