const { authenticate } = require('@feathersjs/authentication').hooks;

const updateinventoryproductentry = require('../../hooks/updateinventoryproductentry');

const updatebillandorder = require('../../hooks/updatebillandorder');
const {populate} = require('feathers-hooks-common');

const resultSchema = {
  include:[ {
    service: 'users',
    nameAs: 'userDetail',
    parentField: '_id',
    childField: 'billId'
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
    all: [],
    find: [],
    get: [],
    create: [updateinventoryproductentry(), updatebillandorder()],
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
