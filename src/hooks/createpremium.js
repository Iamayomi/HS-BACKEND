// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const premiumServ=context.app.service('premiums')
    const result = context.result
     //  if context.approved =true
     if (result.approved){

   const exist=await   premiumServ.find({
        quer:{
          'invoiceInfo.invoiceid':result._id
        }
      })
      if (exist.total>0){
        return
      }else{
        let nheads=0
        for (let i = 0 ; i <= result.plans.length-1; i++) {
          nheads=nheads+result.plans[i].heads

        }


        let obj={
          invoiceInfo:{
            invoiceId:result._id,
            invoiceObj:result,
          },
          serviceInfo:{
           plansRef:result.plans,
          
           policyref:[],
            quantity: nheads,
            amount:result.total_amount,
            createdby: result.createdby,
            createdByName:result.createdByName,
            duedate:result.duedate,
          },
        
          paymentInfo:{
            amountDue:+result.total_amount,
            paidup:0, //total part payment
            balance:+result.total_amount, //oustanding balance for part payment
            amountpaid:0, //amount paid just now
            paymentDetails:[]
          },
          participantInfo:{
            billingFacilityId:result.facilityId, //hmo
            billingFacility:result.facility,
            //locationId: { type: Schema.Types.ObjectId, ref:'location'  },
            clientId:result.customerId,
            client:result.customer,
            clientType:result.customerType,  //indv or corporate
            paymentmode:result.payment_mode
          },
          createdBy: result.createdby,
          createdByName:result.createdByName,
          billing_status:"Unpaid",


        }
        await premiumServ.create(obj)
          .then((resp)=>{

          })
          .catch((err)=>{
            console.log(err)
          })


      }


     }
     //check that premium does not already exist
     //create premium







    return context;
  };
};
