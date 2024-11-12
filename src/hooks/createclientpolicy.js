// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const ClientServ=context.app.service('client') 
    const result=context.result
    //if policy approval updated
    console.log("result",result)
    if(result.approved){
      //update prinicipal
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

      const patient = await ClientServ.get(result.principal._id)
      let paymentinfo1=patient.paymentinfo
      paymentinfo1.push(clientpolicy)
      const human=await ClientServ.patch(result.principal._id, 
        {paymentinfo:paymentinfo1}
      ).then((resp)=>{
       // console.log("final",resp)
       //context.result=resp
      })
      .catch((err)=>{
        console.log(err)
      })



      //loop through dependent and update local policy
      if (result.dependantBeneficiaries.length >0){
        
        for (let element of result.dependantBeneficiaries) {
           
        let clientpolicy1= {
          paymentmode:"HMO",
          organizationId:result.organizationId,
          organizationName:result.organizationName,
          principalId:result.policyNo,
          clientId:element.policyNo?element.policyNo:result.policyNo,
          principalName:`${result.principal.firstname} ${result.principal.lastname}`, //confirm
          plan:result.plan.planName, //confirm
          active:true,
          principal:result.principal._id,
          organizationType: result.organizationType,
          agent:result.agent,
          agentName:result.agentName,
          policy:result
        }

        let patient1 = await ClientServ.get(element._id)
        let paymentinfo1=patient1.paymentinfo
        paymentinfo1.push(clientpolicy1)
        await ClientServ.patch(element._id, 
          {paymentinfo:paymentinfo1}
        ).then((resp)=>{
         // console.log("final",resp)
         //context.result=resp
        })
        .catch((err)=>{
          console.log(err) //throw error
        })

      };
      }
     

    }


    





    return context;
  };
};
