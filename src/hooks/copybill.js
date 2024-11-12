// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const extbillServ=context.app.service('extbills')
    console.log("abcde")
   
    switch(context.method) {
     
      case "create":{  
          // body of case 1
        
          const createobj={
            ...context.result,
            billId:context.result._id
          }
          
          delete createobj._id
          
     
     await extbillServ.create(createobj)
     .then()
     .catch(err=>console.log("error",err))
          break;
        }
      case "patch":{
        const obj= await extbillServ.find({
          query:{
            billId:context.result._id
          }
        }) .then()
        .catch(err=>console.log("error",err))
          // console.log("i got here")

        if(obj.total>0){
         // console.log("this passed")
          const newobj={
            ...context.result,
            billId:context.result._id
          }
          delete newobj._id
          await extbillServ.update(obj.data[0]._id, newobj)
          .then()
          .catch(err=>console.log("error",err))
             
        }else{
          //console.log("this location")
          const creatobj={
            ...context.result,
            billId:context.result._id
          }
          delete creatobj._id
         // console.log(creatobj)
     await extbillServ.create(creatobj)
     .then(resp=>console.log("success",resp))
     .catch(err=>console.log("error",err))
        

        }
     
       
          break;
  
      }      
      case "update":{
          // body of case N
          const obj2= await extbillServ.find({
            query:{
              billId:context.result._id
            }
          }) 
          if(obj2.total>0){
            const newobj={
              ...context.result,
              billId:context.result._id
            }
            delete newobj._id
            await extbillServ.update(obj2.data[0]._id, newobj)
            .then()
            .catch(err=>console.log("error",err))
                 
          }else{
            const creatobj={
              ...context.result,
              billId:context.result._id
            }
            delete creatobj._id
       await extbillServ.create(creatobj)
       .then()
       .catch(err=>console.log("error",err))
          
  
          }
        
          break;
        }
      case "remove":{
            // body of case N
            const obj3= await extbillServ.find({
              query:{
                billId:context.result._id
              }
            })
            .then()
            .catch(err=>console.log("error",err))
                
            if(obj3.total>0){
            await extbillServ.remove(obj3.data[0]._id)
            .then()
            .catch(err=>console.log("error",err))
                 
            }
            break;
          }         
      default:{}
          // body of default
  }


    return context;
  };
};
