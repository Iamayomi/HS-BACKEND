// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    //update invoice
    const invoiceServ= context.app.service('corpinvoices')
    const policyServ= context.app.service('policy')
    const result=context.result
    if (result.billing_status==="Fully Paid"){
      let id= result.invoiceInfo.invoiceId
      await invoiceServ.patch(id,{status:"Paid"})

     const policies= await policyServ.find({
        query:{
          invoice:id
        }
      })
      const data =policies.data
      if (policies.total>0){
        data.forEach( async element => {
          await policyServ.patch(element._id, { isPaid:true})
        });
      }

    }
    //update policy

    return context;
  };
};
