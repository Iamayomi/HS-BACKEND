// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const { el } = require("date-fns/locale");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   // console.log(context.result);
   //console.log("context.data==",context.data)
    if(context.data.documentname==="Prescription"){
 
    const orderServ=context.app.service('order')
   /*  const medicationServ=context.app.service('medication')
    const treatmentServ=context.app.service('treatmentsheet') */
    const medicationhelperServ=context.app.service('medicationhelper')

      context.data.documentdetail.forEach(async (element)=> {

     
    //create medicationorder--> dispense
     await orderServ.create({
          documentationId:context.result._id,
          order_category:"Prescription",
          order: element.medication,
          instruction:element.instruction,
          destination_name: element.destination,
          destination:element.destinationId,
      
          requestingdoctor_Id: context.data.createdBy, 
          requestingdoctor_Name: context.data.createdByname,
          requestingdoctor_locationid:context.data.locationId,
          requestingdoctor_locationName:context.data.location,
          requestingdoctor_facilityId:context.data.facility,
          requestingdoctor_facilityname:context.data.facilityname,
          //userid?employeeId
          clientId: context.data.client,
          clientname:context.data.clientname,
          client:context.data.clientobj,
          //client:{type: Schema.Types.Mixed},
          order_action:[],
          medication_action:[],
          treatment_action:[]
          
    }).then()
    .catch((err)=>console.log(err))

    //create medication helper ---->assist documentation
    await medicationhelperServ.create({
      medication: element.medication,
      instruction:element.instruction
     
    }).then()
    .catch((err)=>console.log(err))
  


  })

    }
    //lab order
    if(context.data.documentname==="Lab Orders"){
 
      const orderServ=context.app.service('order')
    //add order to helper list so that it can be found next time
      const medicationhelperServ=context.app.service('labhelper')
  
        context.data.documentdetail.forEach(async (element)=> {
  
       
      //create order medicationorder--> dispense
       await orderServ.create({
            documentationId:context.result._id,
            order_category:"Lab Order",
            order: element.test,
           // instruction:element.instruction,
            destination_name: element.destination,
            destination:element.destinationId,
         
            requestingdoctor_Id: context.data.createdBy, 
            requestingdoctor_Name: context.data.createdByname,
            requestingdoctor_locationid:context.data.locationId,
            requestingdoctor_locationName:context.data.location,
            requestingdoctor_facilityId:context.data.facility,
            requestingdoctor_facilityname:context.data.facilityname,
            //userid?employeeId
            clientId: context.data.client,
            clientname:context.data.clientname,
            client:context.data.clientobj,
            //client:{type: Schema.Types.Mixed},
            order_action:[],
            medication_action:[],
            treatment_action:[]
            
      }).then()
      .catch((err)=>console.log(err))
  
      //create medication helper ---->assist documentation
      await medicationhelperServ.create({
        test: element.test,
       // instruction:element.instruction
       
      }).then()
      .catch((err)=>console.log(err))
    })
  
      }

    //procedure order
    if(context.data.documentname==="Procedure"){
 
      const orderServ=context.app.service('order')
    //add order to helper list so that it can be found next time
      const medicationhelperServ=context.app.service('labhelper')
  
        context.data.documentdetail.forEach(async (element)=> {
  console.log("creating procedure")
       
      //create order medicationorder--> dispense
       await orderServ.create({
            documentationId:context.result._id,
            order_category:"Procedure",
            order: element.test,
           // instruction:element.instruction,
            destination_name: element.destination,
            destination:element.destinationId,
         
            requestingdoctor_Id: context.data.createdBy, 
            requestingdoctor_Name: context.data.createdByname,
            requestingdoctor_locationid:context.data.locationId,
            requestingdoctor_locationName:context.data.location,
            requestingdoctor_facilityId:context.data.facility,
            requestingdoctor_facilityname:context.data.facilityname,
            //userid?employeeId
            clientId: context.data.client,
            clientname:context.data.clientname,
            client:context.data.clientobj,
            //client:{type: Schema.Types.Mixed},
            order_action:[],
            medication_action:[],
            treatment_action:[]
            
      }).then()
      .catch((err)=>console.log(err))
  
      //create medication helper ---->assist documentation
      await medicationhelperServ.create({
        test: element.test,
       // instruction:element.instruction
       
      }).then()
      .catch((err)=>console.log(err))
    })
  
      }

      //radiology order
      if(context.data.documentname==="Radiology Orders"){
 
        const orderServ=context.app.service('order')
       /*  const medicationServ=context.app.service('medication')
        const treatmentServ=context.app.service('treatmentsheet') */
        const medicationhelperServ=context.app.service('labhelper')
    
          context.data.documentdetail.forEach(async (element)=> {
    
         
        //create medicationorder--> dispense
         await orderServ.create({
              documentationId:context.result._id,
              order_category:"Radiology Order",
              order: element.test,
              instruction:element.instruction,
              destination_name: element.destination,
              destination:element.destinationId,
             // destination_location:  element.destination.location._id||null, 
             
             // destination_location_name: element.destination.location.name||"",
    
             // fulfilled:{ type: Boolean, default: false },
            //  pharm_fulfill: {type: Schema.Types.ObjectId, ref:"facility" },
             // status: { type: String, default: "pending", required: true}, //result ready
              
            //  encounter: { type: Schema.Types.ObjectId, },
              requestingdoctor_Id: context.data.createdBy, 
              requestingdoctor_Name: context.data.createdByname,
              requestingdoctor_locationid:context.data.locationId,
              requestingdoctor_locationName:context.data.location,
              requestingdoctor_facilityId:context.data.facility,
              requestingdoctor_facilityname:context.data.facilityname,
              //userid?employeeId
              clientId: context.data.client,
              clientname:context.data.clientname,
              client:context.data.clientobj,
              //client:{type: Schema.Types.Mixed},
              order_action:[],
              medication_action:[],
              treatment_action:[]
              
        }).then()
        .catch((err)=>console.log(err))
    
        //create medication helper ---->assist documentation
        await medicationhelperServ.create({
          test: element.test,
         // instruction:element.instruction
         
        }).then()
        .catch((err)=>console.log(err))
      })
    
        }

      //premium payment//managed care
      if(context.data.documentname==="Managed Care"){
 
        const orderServ=context.app.service('order')
       /*  const medicationServ=context.app.service('medication')
        const treatmentServ=context.app.service('treatmentsheet') */
      //  const medicationhelperServ=context.app.service('labhelper')
    
          context.data.documentdetail.forEach(async (element)=> {
    
         
        //create orrder for payment of premium
         await orderServ.create({
              documentationId:context.result._id,
              order_category:"Premium Payment",
              order: "Premium for " + element.name +" Plan",
             // instruction:element.instruction,
              destination_name: element.destination,
              destination:element.destinationId,
             // destination_location:  element.destination.location._id||null, 
             
             // destination_location_name: element.destination.location.name||"",
    
             // fulfilled:{ type: Boolean, default: false },
            //  pharm_fulfill: {type: Schema.Types.ObjectId, ref:"facility" },
             // status: { type: String, default: "pending", required: true}, //result ready
              
            //  encounter: { type: Schema.Types.ObjectId, },
              requestingdoctor_Id: context.data.createdBy, 
              requestingdoctor_Name: context.data.createdByname,
              requestingdoctor_locationid:context.data.locationId,
              requestingdoctor_locationName:context.data.location,
              requestingdoctor_facilityId:context.data.facility,
              requestingdoctor_facilityname:context.data.facilityname,
              //userid?employeeId
              clientId: context.data.client,
              clientname:context.data.clientname,
              client:context.data.clientobj,
              //client:{type: Schema.Types.Mixed},
              order_action:[],
              medication_action:[],
              treatment_action:[]
              
        }).then()
        .catch((err)=>console.log(err))
    
        //create medication helper ---->assist documentation
      /*   await medicationhelperServ.create({
          test: element.test, */
         // instruction:element.instruction
         
       /*  }).then()
        .catch((err)=>console.log(err)) */
      })
    
        }

      //admission order

      if(context.data.documentname==="Admission Order"){
 
        const orderServ=context.app.service('order')
       /*  const medicationServ=context.app.service('medication')
        const treatmentServ=context.app.service('treatmentsheet') */
       // const medicationhelperServ=context.app.service('labhelper')
    
         // context.data.documentdetail.forEach(async (element)=> {
         
         element=context.data.documentdetail
        //create medicationorder--> dispense
         await orderServ.create({
              documentationId:context.result._id,
              order_category:"Admission Order",
              order:element.ward.name + " Admission",
              instruction:element.instruction,
              destination_name: element.destination,
              destination:element.destinationId,

              destination_location:  element.ward._id , 
             
              destination_location_name: element.ward.name,
    
             // fulfilled:{ type: Boolean, default: false },
            //  pharm_fulfill: {type: Schema.Types.ObjectId, ref:"facility" },
             // status: { type: String, default: "pending", required: true}, //result ready
              
            //  encounter: { type: Schema.Types.ObjectId, },
              requestingdoctor_Id: context.data.createdBy, 
              requestingdoctor_Name: context.data.createdByname,
              requestingdoctor_locationid:context.data.locationId,
              requestingdoctor_locationName:context.data.location,
              requestingdoctor_facilityId:context.data.facility,
              requestingdoctor_facilityname:context.data.facilityname,
              //userid?employeeId
              clientId: context.data.client,
              clientname:context.data.clientname,
              client:context.data.clientobj,
              //client:{type: Schema.Types.Mixed},
              order_action:[],
              medication_action:[],
              treatment_action:[]
              
        }).then()
        .catch((err)=>console.log(err))
    
        //create medication helper ---->assist documentation
        //await medicationhelperServ.create({
         // test: element.test,
         // instruction:element.instruction
         
       // }).then()
        //.catch((err)=>console.log(err))
     // })
    
        //})
  
      }
      if(context.data.documentname==="Discharge Order"){
 
        const orderServ=context.app.service('order')
       /*  const medicationServ=context.app.service('medication')
        const treatmentServ=context.app.service('treatmentsheet') */
       // const medicationhelperServ=context.app.service('labhelper')
    
         // context.data.documentdetail.forEach(async (element)=> {
         
         element=context.data.documentdetail
        //create medicationorder--> dispense
         await orderServ.create({
              documentationId:context.result._id,
              order_category:"Discharge Order",
              order:"Discharge from "+  element.ward.name ,
              instruction:element.instruction,
               destination_name: element.destination, //
              destination:element.destinationId,

              destination_location:  element.ward._id , 
             
              destination_location_name: element.ward.name, 
    
             // fulfilled:{ type: Boolean, default: false },
            //  pharm_fulfill: {type: Schema.Types.ObjectId, ref:"facility" },
             // status: { type: String, default: "pending", required: true}, //result ready
              
            //  encounter: { type: Schema.Types.ObjectId, },
              requestingdoctor_Id: context.data.createdBy, 
              requestingdoctor_Name: context.data.createdByname,
              requestingdoctor_locationid:context.data.locationId,
              requestingdoctor_locationName:context.data.location,
              requestingdoctor_facilityId:context.data.facility,
              requestingdoctor_facilityname:context.data.facilityname,
              //userid?employeeId
              clientId: context.data.client,
              clientname:context.data.clientname,
              client:context.data.clientobj,
              //client:{type: Schema.Types.Mixed},
              order_action:[],
              medication_action:[],
              treatment_action:[]
              
        }).then()
        .catch((err)=>console.log(err))
    
        //create medication helper ---->assist documentation
        //await medicationhelperServ.create({
         // test: element.test,
         // instruction:element.instruction
         
       // }).then()
        //.catch((err)=>console.log(err))
     // })
    
        //})
  
      }

      if(context.data.documentname==="Discharge"){
 
        const orderServ=context.app.service('order')
        const admissionServ=context.app.service('admission')
       /*  const medicationServ=context.app.service('medication')
        const treatmentServ=context.app.service('treatmentsheet') */
       // const medicationhelperServ=context.app.service('labhelper')
    
         // context.data.documentdetail.forEach(async (element)=> {
         
         //element=context.data.documentdetail
        //create medicationorder--> 
        

        //patch discharge order
        const dischargeorder= context.data.admission.order._id
          /*  console.log(context.data)
            console.log("result") */
          await orderServ.patch(
            dischargeorder,
              {
              fulfilled:"True",
              order_status:"Fulfilled",
              }).then()
            .catch((err)=>console.log(err))

           //patch admission
           const admission_id= context.data.admission.client.admission_id
          /*  console.log(context.data)*/
          //  console.log("id", admission_id) 
          await admissionServ.patch(
            admission_id,
              {
             // status:"unoccupied",
              end_time:new Date(),
              }).then()
            .catch((err)=>console.log(err)) 

    
        //create medication helper ---->assist documentation
        //await medicationhelperServ.create({
         // test: element.test,
         // instruction:element.instruction
         
       // }).then()
        //.catch((err)=>console.log(err))
     // })
    
        //})
  
      }

      if(context.data.documentname==="Drug Administration"){
 
        const orderServ=context.app.service('order')
      //  console.log(context.data)
        //const admissionServ=context.app.service('admission')
       /*  const medicationServ=context.app.service('medication')
        const treatmentServ=context.app.service('treatmentsheet') */
       // const medicationhelperServ=context.app.service('labhelper')
    
         // context.data.documentdetail.forEach(async (element)=> {
         
         //element=context.data.documentdetail
        //create medicationorder--> 
        

        //patch discharge order
        const order_id= context.data.update.order_id
        //const result= await orderServ.find(order_id)
        //console.log(result)
          /*  console.log(context.data)
            console.log("result") */
         await orderServ.update(
            order_id,
            context.data.order
              ).then()
            .catch((err)=>console.log(err)) 

           //patch admission
          // const admission_id= context.data.admission.client.admission_id
          /*  console.log(context.data)*/
       /*      console.log("id", admission_id) 
          await admissionServ.patch(
            admission_id,
              {
             // status:"unoccupied",
              end_time:new Date(),
              }).then()
            .catch((err)=>console.log(err))  */

    
        //create medication helper ---->assist documentation
        //await medicationhelperServ.create({
         // test: element.test,
         // instruction:element.instruction
         
       // }).then()
        //.catch((err)=>console.log(err))
     // })
    
        //})
  
      }


    return context;
  };
};


