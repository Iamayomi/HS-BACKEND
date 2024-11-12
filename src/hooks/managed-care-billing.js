// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    console.log(context.params.query)

    if (context.params.query.hasOwnProperty('dest_org')){

      let bandserv=context.app.service('organizationclient')
     const findband= await bandserv.find({query:{
          facility:context.params.query.facility ,
          organization:context.params.query.dest_org ,
          relationshiptype: "managedcare",
          active:true
          }

      })
/*       console.log(context.params.query)
console.log(findband.data[0].band) */

let contracts={}
/* console.log(contracts) */
    if (findband.total >0){
        if (context.params.query.mode==="HMOCover"){
         
          context.params.query={
            ...context.params.query,
            'contracts.band':findband.data[0].band,
          'contracts.source_org': context.params.query.facility,
          'contracts.dest_org':context.params.query.facility
          }

        }
        if (context.params.query.mode==="CompanyCover"){
          
        }
      }else{
        console.log("not found")
      }
    }
    
   delete context.params.query.mode
   delete context.params.query.dest_org
  /*  const oldcontext=context.params.query 
   context.params.query ={...oldcontext, ...contracts } */
  /*  console.log(context.params.query) */
    return context;
  };
};
