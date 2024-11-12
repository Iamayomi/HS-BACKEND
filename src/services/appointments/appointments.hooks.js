const { authenticate } = require('@feathersjs/authentication').hooks;
const paginatefalse = require('../../hooks/paginatefalse');
const {populate} = require('feathers-hooks-common');
const resultSchema = {
  include:[ {
    service: 'facility',
    nameAs: 'facilityDetail',
    parentField: 'facility',
    childField: '_id'
  },
 /* {
    service: 'billing',
    nameAs: 'billingDetails',
    parentField: 'billingId',
    childField: '_id'
  },  */
    /*{
    service: 'doctor',
    nameAs: 'DocDetails',
    parentField: 'doctor',
    childField: 'userID'
  } */
  ],
}


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
    all: [populate({schema:resultSchema})],
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
