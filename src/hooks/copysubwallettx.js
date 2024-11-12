// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const extbillServ=context.app.service('extsubtx')
    switch(context.method) {
     
      case "create":  
          // body of case 1
          const creatobj={
            ...context.result,
            transId:context.result._id
          }
        delete creatobj._id
     await extbillServ.create(creatobj)
          break;
  
      case "patch":
        const obj= await extbillServ.find({
          query:{
            transId:context.result._id
          }
        }) 
        if(Oobj.total>0){
          const newobj={
            ...context.result,
            transId:context.result._id
          }
          delete newobj._id
          await extbillServ.update(obj.data[0]._id, newobj)
        }else{
          const creatobj={
            ...context.result,
            transId:context.result._id
          }
          delete creatobj._id
     await extbillServ.create(creatobj)

        }
     
          // body of case 2
          break;
  
      case "update":
          // body of case N
          const obj2= await extbillServ.find({
            query:{
              transId:context.result._id
            }
          }) 
          if(obj2.total>0){
            const newobj={
              ...context.result,
              transId:context.result._id
            }
            delete newobj._id
            await extbillServ.update(obj2.data[0]._id, newobj)
          }else{
            const creatobj={
              ...context.result,
              transId:context.result._id
            }
            delete creatobj._id
       await extbillServ.create(creatobj)
  
          }
        
          break;
  
      case "remove":
            // body of case N
            const obj3= await extbillServ.find({
              query:{
                transId:context.result._id
              }
            }) 
            if(obj3.total>0){
            await extbillServ.remove(obj3.data[0]._id)
            }
        
    
          break;
    }
    return context;
  };
};
