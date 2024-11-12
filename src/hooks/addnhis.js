// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   
/* check every policy beneficiairy
- principal
- beneficiary
if they have only cash as payment info
update it to include policy info */

const policyServ= context.app.service('policy')
const clientServ= context.app.service('client')
const id=context.params.query.orgId 
const limit=context.params.query.limit
const skip=context.params.query.skip
//console.log("skip:",skip)
//console.log(id)
    const all=  await policyServ.find({
      query:{
        
        organizationId:id,
        $limit:limit,
        $skip:skip

      },
      //paginate:false
    })
    const allpolicy=all.data
    //console.log (all.total)
    //console.log (allpolicy.length +skip)

    for (let p = 0; p <= allpolicy.length-1; p++) { //
      // let client = allpolicy[p]
       let result= allpolicy[p]
       let principalstate=true
       //console.log(p)
       //principal
      // console.log(result)
       try{
  
      
       if (!!result.principal){
  
      
       let principalx=result.principal._id
  
      // console.log(principalx)
       let pclient= await clientServ.get(principalx)
       
      /*  .then(async(resp)=>{
         pclient=resp */
         // console.log("final",resp)
         //context.result=resp
  
         let payinfo=pclient.paymentinfo
         if (payinfo.length==1){
           let clientpolicy= {
             paymentmode:"HMO",
             organizationId:result.organizationId,
             organizationName:result.organizationName,
             principalId:result.policyNo,
             clientId:result.policyNo,
             principalName:`${result.principal.firstname} ${result.principal.lastname}`, //confirm --result.principal.name?result.principal.name:
             plan:result.plan.planName, //confirm --result.plan.name?result.plan.name: 
             active:true,
             principal:result.principal._id,
             organizationType: result.organizationType,
             agent:result.agent,
             agentName:result.agentName,
             policy:result
           }
           // add hmo policy
        payinfo.push(clientpolicy)
          await clientServ.patch(principalx, {paymentinfo:payinfo})
          
         /*  .then((resp)=>{
            //console.log("final",resp)
           //context.result=resp
          })
          .catch((err)=>{
            console.log(err)
          })
          */
         }
       /*  })
        .catch((err)=>{
          console.log("principal" + err,principalx)
        }) */
       }else{
        // console.log("no principal",result)
         principalstate=false
       }
       
  //dependents
       if (result.dependantBeneficiaries.length >0){
         for (let i = 0; i <= result.dependantBeneficiaries.length-1; i++) {
        // for (let element of result.dependantBeneficiaries) {
             let element = result.dependantBeneficiaries[i]
           let dept=element._id
       let dclient= await clientServ.get(dept)
       //.then(async(dresp)=>{
         // console.log("final",resp)
         //context.result=resp
        // dclient=dresp
         let dpayinfo=dclient.paymentinfo
         if (dpayinfo.length==1){
              
           let clientpolicy1= {
             paymentmode:"HMO",
             organizationId:result.organizationId,
             organizationName:result.organizationName,
             principalId:result.policyNo,
             clientId:element.policyNo?element.policyNo:result.policyNo,
             principalName:principalstate?`${result.principal.firstname} ${result.principal.lastname}`:"", //confirm
             plan:result.plan.planName, //confirm
             active:true,
             principal:principalstate?result.principal._id:"",
             organizationType: result.organizationType,
             agent:result.agent,
             agentName:result.agentName,
             policy:result
           }
   
           //let patient1 = await clientServ.get(element._id)
           let paymentinfo1=dpayinfo
           paymentinfo1.push(clientpolicy1)
           await clientServ.patch(element._id, {paymentinfo:paymentinfo1})
          /*  ).then((resp)=>{
            // console.log("final",resp)
            //context.result=resp
           })
           .catch((err)=>{
             console.log(err) //throw error
           }) */
   
         }
  
       /*  })
        .catch((err)=>{
          console.log("dependent"+err,dept )
        })
        
     }} */
      }
     }
   }
   catch(error){
    // console.log(error)
    // console.log(p,result)
   }
   }
    
   // console.log("end")
    return context;
  };
};
