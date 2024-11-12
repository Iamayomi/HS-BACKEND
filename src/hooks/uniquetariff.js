// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const exist= await context.app.service('tariff').find({
      query:{
       facility: context.data.facility,
        organization: context.data.organization,
        band: context.data.band,
       // relationship:context.data.relationship
      }
    })
    if(exist.data.length>0){
      context.result=exist
    }
    return context;
  };
};
