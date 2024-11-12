const { authenticate } = require('@feathersjs/authentication').hooks;

const invoicebillpayment = require('../../hooks/invoicebillpayment');

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
    find: [],
    get: [],
    create: [invoicebillpayment()],
    update: [],
    patch: [invoicebillpayment()],
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
