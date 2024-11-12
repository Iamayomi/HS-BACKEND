// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => { //injected cash payment information for new client
  return async context => {
   // console.log(context.result)
    const ClientServ=context.app.service('familyprofile') 
    const result=context.result
    const obj={
      paymentmode:"Cash",
        organizationId:null,
        organizationName:null,
        principalId:"",
        clientId:"",
        principalName: context.data.name,
        plan:"Cash",
        active:true,
        principal:result._id
    }

   let paymentinfo1=result.paymentinfo
    paymentinfo1.push(obj)
    await ClientServ.patch(result._id, 
      {paymentinfo:paymentinfo1}
    ).then((resp)=>{
     // console.log("final",resp)
     context.result=resp
    })
    .catch((err)=>{
      console.log(err)
    })
   // console.log(human)
    return context;
  };
};
