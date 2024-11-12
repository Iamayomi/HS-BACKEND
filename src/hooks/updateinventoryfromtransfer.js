// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const data = context.data
    const inventServ=context.app.service('productentry')

    if (data.type==="requisition"){
      return
    }else{

   

    //manipulate data
    if (data.transactioncategory==="credit"){
      const accepted=data.productitems.filter((el,i)=>el.dest_status==="Accepted")
      if (accepted.length ===0){
        return
      }else{
        data.productitems=accepted
        data.productitems.map((el)=>(
          el.createdby=data.processedby
        ))
        await inventServ.create(data)
      } 



    }else{
      await inventServ.create(data)
    }

  }
    //create productentry
   



    return context;
  };
};
