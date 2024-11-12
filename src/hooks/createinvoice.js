// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
const invoiceServ=context.app.service('corpinvoices')
const res=context.result

    if (!!context.data.dealInfo){

      const deal=context.data.dealInfo[0].deal
      deal.invoices.map(async(inv,i) => {
       // console.log("starting 2")
        inv.customerId=res._id
        inv.customer=res
        inv.facilityId=deal.facilityId
        if(!!deal.facility){
          inv.facility=deal.facility
        }
        if(!!deal.facilityName){
          inv.facilityName=deal.facilityName
        }
        
        delete inv._id
       // console.log("invoices",inv)
          await InvServ.create(inv)
         .then(res=>console.log(res))
         .catch(error=>console.log(error))

        // console.log('abj',abj)
        })
    }

    return context;
  };
};
