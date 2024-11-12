// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { ObjectId } = mongoose.Types;
    const paygServ=context.app.service('paygtransc')
    const documentServ=context.app.service('clinicaldocument')
    const result = context.data
    const facilityId= result.facility
    const clientId=result.client
    const facilityname= result.facilityname
    const updatedDate=result.updatedAt
    const today = new Date()
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    // check documentation has been made for the patient today

  



  const exist=  await paygServ.find({query:{
 
 clientId:clientId,
      facilityId:facilityId,
      updatedAt:{
        $gte: startOfToday,
        $lt: endOfToday
    }
  }})
    
  // console.log(exist.total)
       if(exist.total===0){
       await   paygServ.create({
            clientId,
            facilityId,
            paid:false,
            type:result.documentType,
            location:result.location,
            facilityname: result.facilityname,
           })

          // console.log("transaction created", exist.total)
      }else{
        //console.log("transaction not created",exist.total)
      }
   
     // if yes : skip
     // if no: create record for transaction table








    return context;
  };
};
