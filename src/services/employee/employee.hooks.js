
const { authenticate } = require('@feathersjs/authentication').hooks;

const createUserfromEmployeeData = require('../../hooks/create-userfrom-employee-data');

const getfacilityDetails = require('../../hooks/getfacility-details');

const { populate } = require ('feathers-hooks-common')


const employeeFacilitySchema = {
  include: {
    service: 'facility',
    nameAs: 'facilityDetail',
    parentField: 'facility',
    childField: '_id'
  }
}

module.exports = {
  before: {
    all: [ /* authenticate('jwt') */ ],
    find: [],
    get: [],
    create: [createUserfromEmployeeData()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({ schema: employeeFacilitySchema })],
    find: [], //getfacilityDetails()
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
