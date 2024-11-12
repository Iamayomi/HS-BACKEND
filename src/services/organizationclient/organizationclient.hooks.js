const { authenticate } = require('@feathersjs/authentication').hooks;
const {populate} = require('feathers-hooks-common');

const resultSchema = {
  include:[ {
    service: 'facility',
    nameAs: 'facilityDetail',
    parentField: 'facility',
    childField: '_id'
  },
 {
    service: 'facility',
    nameAs: 'organizationDetail',
    parentField: 'organization',
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
const searchorgclient = require('../../hooks/searchorgclient');
const statehiamanagedcareplans = require('../../hooks/statehiamanagedcareplans');
const paginatefalse = require('../../hooks/paginatefalse');
const uniqueband = require('../../hooks/uniqueband');
module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [/* paginatefalse(), */searchorgclient()],
    get: [],
    create: [uniqueband()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({ schema: resultSchema })],
    find: [],
    get: [],
    create: [], //statehiamanagedcareplans()
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
