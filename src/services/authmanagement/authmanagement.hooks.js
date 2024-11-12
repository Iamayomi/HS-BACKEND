const {
  hashPassword
} = require('@feathersjs/authentication-local').hooks;
const {authenticate} = require('@feathersjs/authentication').hooks;
const common = require('feathers-hooks-common');
const isAction = (...args) => hook => args.includes(hook.data.action);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      common.iff(
        isAction('passwordChange', 'identityChange'),
        authenticate('jwt'),
      ),
      hashPassword('password')
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
