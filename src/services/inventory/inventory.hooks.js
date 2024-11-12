const { authenticate } = require('@feathersjs/authentication').hooks;
const {populate} = require('feathers-hooks-common');

const inventorySchema = {
  include:[ {
    service: 'products',
    nameAs: 'productDetail',
    parentField: 'productId',
    childField: '_id'
  },
 {
    service: 'billing',
    nameAs: 'billingDetails',
    parentField: 'billingId',
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
const createservicefrominventory = require('../../hooks/createservicefrominventory');
const inventorycheck = require('../../hooks/inventorycheck');
//populate({schema:doctorCitizenSchema})

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
    all: [populate({schema:inventorySchema})],
    find: [inventorycheck()],
    get: [],
    create: [createservicefrominventory()],
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
