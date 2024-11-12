// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const employeeServ= context.app.service('employee')
   // console.log(context.data)
   // console.log(context.result)
    if (context.data.hasEmployee){
      const empData=context.data.employeeData
      empData.facility=context.result._id
      //console.log(empData)
      await employeeServ.create(empData)
        /* .then ()
        .error((err)=>{
          console.log(err)
        throw new Error(err)
        }) */

    }
    return context;
  };
};
