const { authenticate } = require('@feathersjs/authentication').hooks;
const prescriptionderivatives = require('../../hooks/prescriptionderivatives');
const epidmatch = require('../../hooks/epidmatch');
const payg = require('../../hooks/payg');
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
    create: [prescriptionderivatives(), epidmatch(),payg()],
    update: [epidmatch(), payg()],
    patch: [epidmatch(), payg()],
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
