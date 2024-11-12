// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  //afterhook from invoice create to do the following
  //2.1 create subwallet transaction- debit==> 
  //2.2 update subwallet

  //2.3 mark orders as paid

  /* const objContext ={
    clientId:medication.participantInfo.client._id,//sending money
    clientName: source ,
    client:medication.participantInfo.client,
    facilityId:user.employeeData[0].facilityDetail._id,
    invoiceNo:documentNo,
    totalamount:totalamount,
    createdby:user._id,
    status:"Fully Paid", //billid to be paid : ref invoice to pay
    bills:allItems,
    balance:balance
   } */
  //2.4 mark bills as paid
  return async context => {

    const invoice = context.result
    const subwallet = context.data.subwallet
    const SubwalletTxServ = context.app.service('subwallettransactions')
    const orderServ = context.app.service('order')
    const billServ = context.app.service('bills')
    const subwalletServ=context.app.service('subwallet')
    const facilityServ=context.app.service('facility')
    const hstransServ=context.app.service('hstranstactions')

    const facility = await facilityServ.get(invoice.facilityId)
    let earning =0
    
  /*   const exist= await subwalletServ.find({
      query:{
        client:context.result.client,
        organization:context.result.organization
      }
    })
 */
    if (invoice.paymentmode==="Cash"){


   //  console.log(context.data.amountPaid)
         await subwalletServ.patch(subwallet._id,{
            amount:Number( subwallet.amount) - Number(context.data.amountPaid)
          }) 
          .then()
          .catch(err=>console.log("error",err))
               

        }
    //console.log(invoice)
    invoice.bills.map( async (element) => {
      let obj={
        // toWallet:{ type: Schema.Types.ObjectId, ref:'facility', }, //receiving money
         //fromWallet:{ type: Schema.Types.ObjectId, ref:'facility', },//sending money
         //subwallet:{ type: Schema.Types.ObjectId, ref:'subwallet', },
         client:invoice.clientId,
         organization:invoice.facilityId,
         category:"debit", //debit/credit
         amount:element.paymentInfo.amountpaid,
         description: element.serviceInfo.name,
        
         toName:context.data.facilityName,
         fromName:invoice.clientName,
         createdby: invoice.createdby,
         
        // refBill:element._id, //billid to be paid : ref invoice to pay
         info:element,
         paymentmode:element.paymentmode,
         
         facility: invoice.facilityId,
         locationId: element.participantInfo.locationId,
         branch:element.participantInfo.branch,
         type: "Payment"
  
     }


     if (invoice.paymentmode==="Cash"){
  //2.1 create subwallet transaction- debit==> 2.2 update subwallet
       await SubwalletTxServ.create(obj)
     }
      
  //2.3 mark orders as paid
     await orderServ.patch(element.orderInfo.orderId, {
       order_status:invoice.status,

     }).then()
     .catch(err=>console.log("patch error",err))

  //2.4 mark bills as paid
     await billServ.patch(element._id, element)
     .then()
     .catch(err=>console.log(err))
  
      
    });
    //if transaction mode
    //1. update hs wallet with new balance
    // "Transaction-Percentage","Transaction-Amount",

    if (invoice.paymentmode==="Cash"){
      earning =0
     if (facility.accessMode==="Transaction-Percentage"){
      earning=Number(context.data.amountPaid)*Number(facility.accessValue)/100
     }
     if (facility.accessMode==="Transaction-Amount"){
      earning=Number(facility.accessValue)
     }
     if (isNaN(facility.walletBalance)){
      facility.walletBalance=0
     }

      await facilityServ.patch(facility._id,{
       
       walletBalance:Number(facility.walletBalance) + earning
      }) .then()
      .catch(err=>console.log("error",err))
          
    
     await hstransServ.create({
      earning:earning,
      invoice:invoice,
      facilityId:facility._id,
      facilityName:facility.facilityName,
      type:"credit"


    }).then()
    .catch(err=>console.log(err)) 
    
    }



    return context;
  };
};
