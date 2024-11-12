// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
   return async context => {
   //  console.log(context.result)
     //let result=context.result||context.result.data

    if (!!context.result.data ){
       //console.log("groupme")
       let categoryArray=[]
       const uniqueArr = await [... new Set(context.result.data.map(data => data.category))]
     //  console.log(uniqueArr)
       uniqueArr.forEach( async arr=>{
         let myOrder= context.result.data.filter(data=>data.category===arr)
         // console.log(myOrder)
        //  console.log(JSON.parse(arr))
 
          const orderGroup={
           //client_id:JSON.parse(arr),
           categoryname:arr,
           services:myOrder,
         
         }
         //console.log(orderGroup)
        categoryArray.push(orderGroup) 
       }
       )
  
        context.result.groupedOrder=categoryArray
    }
 
    return context;
  };
};
