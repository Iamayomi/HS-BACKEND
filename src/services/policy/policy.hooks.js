const { authenticate } = require('@feathersjs/authentication').hooks;

const policybill = require('../../hooks/policybill');

const {populate} = require('feathers-hooks-common');
const paginatefalse = require('../../hooks/paginatefalse');

const resultSchema = {
  include:[ {
    service: 'client',
    nameAs: 'principalDetail',
    parentField: 'principal._id',
    childField: '_id'
  },
 {
    service: 'client',
    nameAs: 'dependentDetails',
    parentField: 'principal._id',
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

const createclientpolicy = require('../../hooks/createclientpolicy');

const reshapedata = require('../../hooks/reshapedata');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [ /* paginatefalse() */ ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [/* populate({schema:resultSchema}) */],
    find: [/* reshapedata() */],
    get: [],
    create: [createclientpolicy()],
    update: [createclientpolicy()],
    patch: [createclientpolicy()],
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
