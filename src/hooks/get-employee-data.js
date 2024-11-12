// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    //console.log(context.result)
    const employeeData= await context.app.services.employee.find({
      query:{
        userId:context.result._id //userID is the same as the user._id
      }
    })
    //console.log(employeeData)
   //  context.result.data[0].employeeData=employeeData.data
     //context.dispatch.data[0].employeeData=employeeData.data
     context.result = {
      ...context.result,
      employeeData: employeeData.data
     }



     // console.log(context.result,context.dispatch.data)
    return context;
  };
};
