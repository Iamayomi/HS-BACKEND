// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const stringSimilarity = require("string-similarity");

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const documentServ=context.app.service('casedefinition')
    const SignalsServ=context.app.service('epidalerts')
    const MessageServ=context.app.service('notification')
    //create an array of element
    const result=context.result

    let termArray=[]
    let commaArray=[]
    let commaArray2=[]
    let matches=[]
    let entry=""
    if (result.documentname=='Clinical Note'){

    const casedefinition= await documentServ.find()   //returns a data array
 //remove , arr = arr.filter(e => e !== 'B')
    

  /*   Object.entries(result.documentdetail).map(([keys,value],i)=>{

     if (keys==="Symptoms"){
      let entry= entry +" "+ value
    
     }
      if (keys==="Clinical Findings"){
        let entry= entry + " " +value
      }
    }) */
    const entry = result.documentdetail.Symptoms+result.documentdetail["Clinical Findings"]
   //
    let caseterm=""
    casedefinition.data.map(async(atd,i)=>{ 
      let caseterm = atd.symptoms+" " +atd.signs
      //compare string here with that of the casedefinition
      let rating = stringSimilarity.compareTwoStrings(caseterm, entry)
   let  rating_string = (rating*100).toFixed(2)
      //console.log("rating:",rating)
      if (rating >0.5){
        let obj = atd.disease.name + ": "+ rating_string +"%"
        matches = [...matches, obj]
        let signal={
          disease: atd.disease.name,
          caseDefinition_id: atd._id,
          location: result.location,
          facility: result.facilityname,
          facilityId: result.facility,
          notified_by_name: result.createdByname,
          notified_by_id: result.createdBy,
          notification_type: "Documentation",
          status: "Suspected",
          action: "Unattended",
          person_notified: "Mr Moses (DSNO)",
          person_notified_type: atd.notification_destination[0], //returns an array
          observations: result.documentdetail,
          match:matches,
          notification_origin_id:result._id,
          notification_origin_name:result.documentname,
          client:result.client,
          geolocation:result.geolocation
        } 
         // write array to be sent to signals
         await SignalsServ.create(signal)
         //write new array to be sent in notification to doctor
        
      }})

     
      // notification to doctor
      let message1={
        
          matchesfound: matches,
          title:"Epidemiology Matches",
          description: "The following notifiable disease conditions seem to match your last documentation " + matches.toString(),
          client:result.client,
          type: "epid",
          facilityId: result.facility,
          dest_personId:result.createdBy

          }
      MessageServ.create(message1).then()
      
    .catch((err)=>{
      console.log(err)
    }) 
  }

    return context;
  

  };
};

