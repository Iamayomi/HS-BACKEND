// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   // console.log(context.params.query.$search)
      const val= context.params.query.$search
      if (!!val){
     
      //call citizen with value
      const orgs =await context.app.service('facility').find(
        {
          query:{
            $or:[
              { facilityName: {
                $regex:val,
                $options:'i' 
            }},
            { facilityAddress: {
                $regex:val,
                $options:'i' 
            }},
            { facilityCity: {
                $regex:val,
                $options:'i' 
            }},
            { facilityContactPhone: {
                $regex:val,
                $options:'i' 
            }},
            { facilityEmail: {
                $regex:val,
                $options:'i' 
            }},
            { facilityOwner: {
                $regex:val,
                $options:'i' 
            }},
            { facilityType: {
                $regex:val,
                $options:'i' 
            }},
          /*   { specificDetails: {
                $regex:val,
                $options:'i' 
            }},
            { gender: val}, */
            ]
          },
          paginate: false
       }
       )
      console.log(orgs)
       let facilityList =[]
     await  orgs.map(element=>{
         facilityList.push(element._id)
       })
  
     // console.log(patientList)
      const qobj={
        organization:{
          $in: facilityList
        }
      }
      context.params.query={ ...context.params.query, ...qobj} 
      //context.params.paginate=false
    }
     //console.log(context.params.query)
     delete context.params.query.$search
      /* roomId: {
        $in: [ 2, 5 ]
      } */
  
      //search encounter with array of id
  
      //pass new query with 
    return context;
  };
};
