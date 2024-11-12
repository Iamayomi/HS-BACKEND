// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const foremost=context.app.service('foremost')

   console.log(context.result.length)
   let people=[]

  // for (let el of context.result){
context.result.forEach(async el=>{
 
            let client={
              firstname: el.patientDetail.firstName ,
              middlename: "",
              lastname: el.patientDetail.lastName ,
              dob:el.patientDetail.dateOfBirth ,
              gender: el.patientDetail.gender ,
              maritalstatus: el.patientDetail.maritalStatus ,
              religion: "", //el.patientDetail. ,
              phone: el.patientDetail.primaryContactPhoneNo ,
              email: el.patientDetail.email , //unique: true
              profession: "",//el.patientDetail. ,
          
              nok_name: el.patientDetail.nextOfKin.length>0? el.patientDetail.nextOfKin[0].fullName:"" ,
              nok_phoneno:el.patientDetail.nextOfKin.length>0? el.patientDetail.nextOfKin[0].phoneNumber:"",
              nok_email:el.patientDetail.nextOfKin.length>0? el.patientDetail.nextOfKin[0].email:"" ,
              nok_relationship:el.patientDetail.nextOfKin.length>0? el.patientDetail.nextOfKin[0].relationship:"" ,
              bloodgroup: el.patientDetail.bloodGroup ,
              genotype: el.patientDetail.genotype ,
              disabilities: "" ,
              specificDetails:"" ,
              clientTags:"" ,
              mrn:el.tags.length>0?el.tags[0].name:"" ,
              address: ("homeAddress" in el.patientDetail)?el.patientDetail.homeAddress.street:"" ,
              city:("homeAddress" in el.patientDetail)?el.patientDetail.homeAddress.city:"" ,
              lga:("homeAddress" in el.patientDetail)?el.patientDetail.homeAddress.lga:"" ,
              state:("homeAddress" in el.patientDetail)?el.patientDetail.homeAddress.state:"" ,
              country:("homeAddress" in el.patientDetail)?el.patientDetail.homeAddress.country:"" ,
              allergies:"" ,
              comorbidities:"" ,
            // alive:{ type:Boolean, default:true },
            // active:{ type:Boolean, default:true },

              facility: "603f69fd750da500154ccb3b" ,
              //userId:"" ,

          } 
          //save client obj with new foremost id into new db ||const stf= await
         await foremost.create(client).then()
          .catch((err)=>console.log(err,el))
              people.push(el)
          
        }) 
        
  
   // console.log("completed")
    context.result=people
    return context;
  };
};
