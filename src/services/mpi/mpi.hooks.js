const { authenticate } = require('@feathersjs/authentication').hooks;

const {populate} = require('feathers-hooks-common');

const mpiSchema = {
  include:[ {
    service: 'client',
    nameAs: 'clientDetail',
    parentField: 'client',
    childField: '_id'
  },
  {
    service: 'facility',
    nameAs: 'facilityDetails',
    parentField: 'facility',
    childField: '_id'
  }, 
    /*{
    service: 'doctor',
    nameAs: 'DocDetails',
    parentField: 'doctor',
    childField: 'userID'
  } */
  ],
}
const searchmpi = require('../../hooks/searchmpi');
const updateClientrelfacilities = require('../../hooks/update-clientrelfacilities');
//populate({schema:mpiSchema})

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [/* searchmpi() */],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [/* populate({schema:mpiSchema}) */],
    find: [],
    get: [],
    create: [updateClientrelfacilities()],
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
