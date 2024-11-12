// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const today = new Date()
   // console.log(context.result.data, today)
    
    context.result.data.forEach(el => {
      if (el.reorder_level>=el.quantity){
        el.buy=true
      }else{
        el.buy=false
      }
      if (el.batches.length>0){
        
         el.batches.forEach(batch=>{
          if (new Date(batch.expirydate) <= new Date(today)){
           // console.log("expired batch exist")
            batch.expiry=true
            el.expiry=true
          }
          
        }) 
      } 
      
    });
    return context;
  };
};
