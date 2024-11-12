// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const ClientServ= context.app.service('client')
    const data = context.data
   // console.log(data)
   const  rel= data.relfacilities
    delete data.relfacilities
   // console.log(data)
    rel.push(data)
    /* console.log(rel) */
    await ClientServ.patch(data.client, {relatedfacilities:rel}).then((resp)=>{
     // console.log(resp)
    }).catch((err)=>{
      console.log(err)
    })
 
    //

    return context;
  };
};
