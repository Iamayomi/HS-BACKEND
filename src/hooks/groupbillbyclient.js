// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
   /* console.log(context)
   console.log(context.params.query.clientId)
   console.log(context.params.noAgg) */
  
    //if (context.params.query.clientId !== undefined ){
    if (!context.params.noAgg){
    // if no client id then agregrate data
    
    if (!context.params.query.clientId){
     // console.log("groupme")
      let orderArray=[]
      let totalAmount=0

      //get all unique client with bills
      const uniqueArr = await [... new Set(context.result.data.map(data => JSON.stringify(data.participantInfo.clientId)))]  // data.participantInfo.paymentmode.detail.principal
     // console.log(uniqueArr)

     //for each client
      uniqueArr.forEach( async arr=>{
          //get all orders for client
          let myOrder= await context.result.data.filter(data=>JSON.stringify(data.participantInfo.clientId)===arr)  // data.participantInfo.paymentmode.detail.principal
       // console.log(myOrder)
        //  console.log(JSON.parse(arr))

       
          let catArray=[]
          //get all the categories of orders for the current client
              const uniqueCat = await [... new Set(myOrder.map(data => data.orderInfo.orderObj.order_category))]
          //   console.log(uniqueCat)

                  // get an array of all orders for each category for the current client
                    uniqueCat.forEach( async carr=>{
                    let catOrder= await myOrder.filter(data=>data.orderInfo.orderObj.order_category===carr) //filter service info
                    //calaculate total amount for category
                         //calc total cost of order
                                  catAmount=catOrder.reduce(
                                    (total,order )=>{
                                       // console.log(order.paymentInfo.balance)
                                        let amz= +order.paymentInfo.balance
                                       // console.log(amz)
                                        return +(total + amz)
                                    },0
                                  )
                                 // console.log("Category amount", catAmount)

                    //create the category object
                    const catGroup={
                        order:catOrder,
                        catName:carr,
                        catAmount:catAmount
                      }
                      //add array to category carray
                    await  catArray.push(catGroup)
                    // console.log("catarray:",catArray)
                    })

                     //calc total cost of order
           totalAmount=myOrder.reduce(
            (total,order )=>{
              //  console.log(order.paymentInfo.balance)
                let amz= +order.paymentInfo.balance
             //   console.log(amz)
                return +(total + amz)
            },0
          )
         //  console.log("total amount", totalAmount)
                  //make up the client object
                    const orderGroup={
                      client_id:JSON.parse(arr),
                      clientname:myOrder[0].participantInfo.paymentmode.detail.principalName,   //myOrder[0].orderInfo.orderObj.clientname,
                      bills:catArray,
                      clientAmount:totalAmount
                    
                    }
          //add the client object to the grouped array
       // console.log(orderGroup)
          await orderArray.push(orderGroup) 
        //  console.log("orderarray:",orderArray)
        }
        )
        //add final array to the payload
       context.result.groupedOrder=orderArray
    }
  }


    return context;
  };
};
