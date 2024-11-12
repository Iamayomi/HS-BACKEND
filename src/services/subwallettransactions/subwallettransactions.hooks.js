const { authenticate } = require('@feathersjs/authentication').hooks;

const updatesubwallet = require('../../hooks/updatesubwallet');

const copysubwallettx = require('../../hooks/copysubwallettx');
const {populate} = require('feathers-hooks-common');
const resultSchema = {
  include:[ {
    service: 'location',
    nameAs: 'locationDetail',
    parentField: 'locationId',
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
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [populate({schema:resultSchema})],
    get: [],
    create: [updatesubwallet(), copysubwallettx()],
    update: [copysubwallettx()],
    patch: [copysubwallettx()],
    remove: [copysubwallettx()]
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
