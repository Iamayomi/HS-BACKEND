// Use this context to manipulate incoming or outgoing data.
// For more information on contexts see: http://docs.feathersjs.com/api/contexts.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    if(context.params.query && context.params.query.$paginate) {
      context.params.paginate = context.params.query.$paginate === 'false' || context.params.query.$paginate === false;
      delete context.params.query.$paginate;
    }

    return context;
  };
};
