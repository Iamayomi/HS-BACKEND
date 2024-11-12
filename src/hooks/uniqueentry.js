// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const exist= await context.app.service('products').find({
      query:{
        name: context.data.name,
        category: context.data.category,
        baseunit: context.data.baseunit,
      }
    })
    if(exist.data.length>0){
      context.result=exist
    }
    return context;
  };
};
