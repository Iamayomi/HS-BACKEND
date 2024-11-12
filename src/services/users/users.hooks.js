const { authenticate } = require('@feathersjs/authentication').hooks;
const verifyHooks = require('feathers-authentication-management').hooks;
//const accountService = require('../authmanagement/notifier');
const authNotifier = require('../authmanagement/notifier');
const { iff, isProvider, preventChanges,disallow } = require('feathers-hooks-common');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const getEmployeeData = require('../../hooks/get-employee-data');

const { 
  addVerification, 
  removeVerification 
} = require('feathers-authentication-management');


const sendVerify = () =>  {
  return async(context) => {
    const notifier = authNotifier(context.app);

    const users = Array.isArray(context.result) 
      ? context.result
      : [context.result];

    await Promise.all(
      users.map(async user => notifier('resendVerifySignup', user))
    );
  };
};

const patchclient = require('../../hooks/patchclient');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ hashPassword('password'), /* addVerification("auth-management") */ ],
    update: [disallow()],
    patch: [
      iff(
        isProvider('external'),
        preventChanges(
          true,
          'email',
          'isVerified',
          'resetExpires',
          'resetShortToken',
          'resetToken',
          'verifyChanges',
          'verifyExpires',
          'verifyShortToken',
          'verifyToken',
        ),
        hashPassword('password'),
      ), ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [], //getEmployeeData
    get: [getEmployeeData()], // getEmployeeData()
    create: [patchclient()],
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
