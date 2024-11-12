// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   /*  const empl=context.result.data
    console.log("result.data:", empl)
   const guyo= async()=> { if(Array.isArray(empl) && empl.length){
    await empl.map(async (em)=>{
       console.log("employeedata:b4 facilty",em)
      const facilityData= await context.app.service('facility').get(em.facility)
       em.facilityData=facilityData
      console.log("employeedata+ facilty",em)
     })
     console.log("end of array")
    console.log("result.data: after", empl)
      
   }else{
     console.log("nothing to do")
   }} */
    /* const facilityData= await context.app.service('facility').get(context.result.facility)
    console.log(facilityData)
   //  context.result.data[0].employeeData=employeeData.data
     //context.dispatch.data[0].employeeData=employeeData.data
     context.result = {
      ...context.result,
       facilityData: facilityData.data
     } 
     console.log("here", context.result)
     */
     


    return context;
  };
};
