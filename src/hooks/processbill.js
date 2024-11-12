// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const ClientServ=context.app.service('clinicaldocument')
    const orderServ=context.app.service('order')
    const billServ=context.app.service('bills')
    const smsServ=context.app.service('sendsms')
    const user = context.params.user
    //.log(user)
    const billing_status=user.employeeData[0].facilityDetail.billingMode
   // console.log("billing status",billing_status)

    //create documentation
  let docu= await  ClientServ.create(context.data.document)
      .then()
      .catch((err)=>{
        //console.log(err)
      })

    // create order
      context.data.serviceList.forEach(async (el)=>{
        el.orderinfo.documentationId=docu._id
        let ordu= await orderServ.create(el.orderinfo)
          .then()
          .catch((err)=>{
           // console.log(err)
          })
         //create bill
          el.billInfo.orderInfo.orderId=ordu._id
          // check if billing status should be updated
          if (billing_status==="Non-Billing"){
            el.billInfo.billing_status="Fully Paid"
          }
       //   console.log(el.billInfo)

          let billu= await billServ.create(el.billInfo)
      })
      //send sms
      const document=context.data.document
      const serviceList=context.data.serviceList
      let phoneNo=serviceList[0].billInfo.participantInfo.client.phone
      if(phoneNo.charAt(0)==="+"){
        phoneNo=phoneNo.substring(1)
      }
      //turn off sending sms
   /*  await  smsServ.create({
        message:`A new bill has been created for ${document.clientname} for ${serviceList.length} service(s) from ${document.location}
          ${document.facilityname} on ${new Date().toUTCString()}.
          Kindly view and pay your bills here: https://healthstack-test.netlify.app/external-payment/${document.facility}/${document.client}`,
        receiver:`${phoneNo}`
  
      })
      .then((res)=>{
       
        console.log("sms sent successfully",res)
      })
      .catch((err)=>{
       
        console.log("Error occurred sending sms " + err)
  
      }) */

    return context;
  };
};
