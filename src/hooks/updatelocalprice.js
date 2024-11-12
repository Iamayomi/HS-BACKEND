// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    let contractSel
    const inventServ=context.app.service('inventory')
    const service=context.result||context.result.data[0]
   if (!!service.inventoryId){
     service.contracts.forEach(e=>{
    //  if(e.source_org===e.dest_org){
      
      let jump=(JSON.stringify(e.dest_org))
      let jump1=(JSON.stringify(e.source_org))
      if(jump===jump1){
        contractSel=e
      }

    
   //}
   })
  
    //const inventory = await inventServ.get(inventoryId)
    
     inventServ.patch(service.inventoryId, {
      sellingprice:contractSel.price
    })
  }
    return context;
  };
};
