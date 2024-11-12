// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
      //console.log(context.params.query.$search)
      const val= context.params.query.$search
      if (!!val){
      delete context.params.query.$search
      //call citizen with value
      const patients =await context.app.service('client').find(
        {
          query:{
            $or:[
              { firstname: {
                $regex:val,
                $options:'i' 
            }},
            { lastname: {
                $regex:val,
                $options:'i' 
            }},
            { middlename: {
                $regex:val,
                $options:'i' 
            }},
            { phone: {
                $regex:val,
                $options:'i' 
            }},
            { clientTags: {
                $regex:val,
                $options:'i' 
            }},
            { mrn: {
                $regex:val,
                $options:'i' 
            }},
            { email: {
                $regex:val,
                $options:'i' 
            }},
            { specificDetails: {
                $regex:val,
                $options:'i' 
            }},
            { gender: val},
            ]
          },
          paginate: false
       }
       )
      //console.log(patients)
       let patientList =[]
     await  patients.map(element=>{
         patientList.push(element._id)
       })
  
     // console.log(patientList)
      const qobj={
        client:{
          $in: patientList
        }
      }
      context.params.query={ ...context.params.query, ...qobj} 
      //context.params.paginate=false
    }
      //console.log(context.params.query)
      /* roomId: {
        $in: [ 2, 5 ]
      } */
  
      //search encounter with array of id
  
      //pass new query with 
    return context;
  };
};
