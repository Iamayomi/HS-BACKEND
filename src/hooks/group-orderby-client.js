// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    //console.log(context.result)
  
    if (!context.params.query.clientId ){
     // console.log("groupme")
      let orderArray=[]
      const uniqueArr = await [... new Set(context.result.data.map(data => JSON.stringify(data.clientId)))]
     // console.log(uniqueArr)
      uniqueArr.forEach( async arr=>{
        let myOrder= context.result.data.filter(data=>JSON.stringify(data.clientId)===arr)
        // console.log(myOrder)
       //  console.log(JSON.parse(arr))

         const orderGroup={
          client_id:JSON.parse(arr),
          clientname:myOrder[0].clientname,
          orders:myOrder,
        
        }
       // console.log(orderGroup)
        orderArray.push(orderGroup) 
      }
      )
 
       context.result.groupedOrder=orderArray
    }



    return context;
  };
};
