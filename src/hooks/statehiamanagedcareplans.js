// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   // console.log("sip")
   // console.log(context.result)
    const billingserv=context.app.service('billing')
    //goal is that when a hmo is added it inherits the stathia plans in its managed care category
    //find if facility is statehia
    const facilityType = context.result.facilityDetail.facilityType
    const relationshipType = context.result.relationshiptype
   // console.log("facilitytype :",facilityType )
   // console.log("relationshipType :",relationshipType )
    if (facilityType==="State HIA" && relationshipType==="managedcare"){
      const plans = await billingserv.find({
        query:{
          facility:context.result.facility,
          'contracts.source_org' :context.result.facility,
          'contracts.dest_org' : context.result.facility,
          category:"Managed Care",
       
          $sort: {
              category: 1
          }
          }})
         // console.log(plans)
          //console.log(plans.groupedOrder[0].services)
         const additionalplan= plans.groupedOrder[0].services.forEach(async (c)=>{
          //for each serviceplans.groupedOrder[0].services.
          
              // add a contract that is same as contract 
              let originalContract= c.contracts.filter(contr=>contr.dest_org.toString()===context.result.facility.toString() && contr.source_org.toString()===context.result.facility.toString())
                //but the dest and source are the same contr.dest_org
                //console.log(c.contracts)
                //console.log(context.result.facility)

                //console.log(originalContract)
                originalContract[0].dest_org=context.result.organizationDetail._id
                originalContract[0].source_org=context.result.organizationDetail._id
                originalContract[0].dest_org_name=context.result.organizationDetail.facilityName
                originalContract[0].source_org_name=context.result.organizationDetail.facilityName
          // consider renaming the name
          plans.groupedOrder[0].services.push(originalContract[0])
            originalContract=[]
           // console.log(plans.groupedOrder[0].services)

         })

    }
    //update managedcare services with 


    return context;
  };
};
