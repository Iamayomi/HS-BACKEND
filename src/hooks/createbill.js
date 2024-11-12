// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => { //create bill from order
  return async context => {
    const user = context.params.user

   // console.log("userinfo",user)
    if (!!user){


    const billing_status=user.employeeData[0].facilityDetail.billingMode
    const facilityServServ=context.app.service('facility')
    //console.log("billing status",billing_status)
    if(!!context.data.billInfo){


      const billServ=context.app.service('bills')
      if (billing_status==="Non-Billing"){
        context.data.billInfo.billing_status="Fully Paid"
      }
      console.log("na here")

     await billServ.create(context.data.billInfo)
      

    }
  }
    return context;
  };
};
