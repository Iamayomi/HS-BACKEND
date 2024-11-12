// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    
    const clientServ=context.app.service("client")
    if (context.data.patchclient){
      
    await  clientServ.patch(context.data.clientId,{userId:context.result._id})
    .then()
    .catch(err=>console.log(err))
    }




    return context;
      

  };
};
