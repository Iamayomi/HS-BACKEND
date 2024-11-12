const { authenticate } = require('@feathersjs/authentication').hooks;

const { populate } = require ('feathers-hooks-common')
const foremostdatamigration = require('../../hooks/foremostdatamigration');
const patientPeopleSchema = {
  include: {
    service: 'oldapmispeople',
    nameAs: 'patientDetail',
    parentField: 'personId',
    childField: '_id'
  }
}

const paginatefalse = require('../../hooks/paginatefalse');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],//paginatefalse()
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({ schema: patientPeopleSchema }) ], //foremostdatamigration()
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
