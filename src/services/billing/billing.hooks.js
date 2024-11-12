const { authenticate } = require('@feathersjs/authentication').hooks;

const updatelocalprice = require('../../hooks/updatelocalprice');

const groupservicebycategory = require('../../hooks/groupservicebycategory');

const managedCareBilling = require('../../hooks/managed-care-billing');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [managedCareBilling()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [groupservicebycategory()], //
    get: [],
    create: [updatelocalprice()],
    update: [updatelocalprice()],
    patch: [updatelocalprice()],
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
