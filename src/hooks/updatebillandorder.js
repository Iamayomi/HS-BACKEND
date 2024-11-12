// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const BillServ=context.app.service('bills')
    const OrderServ= context.app.service('order')
  
    if (context.data.type!== "Dispense"){
        return context
    }
    /* console.log(context.result)*/
    //console.log("uuuuu",context.data) 
    context.data.productitems.forEach( async element => {
     // console.log("eee",element.billinfo) 
    
      if (element.billinfo.bill_status==="Fully Paid"){
       /*  const bill = await */ 
      await BillServ.patch(element.billinfo.billid, {
          'orderInfo.orderObj.fulfilled':"True"
        }).then((resp)=>{
         
        }).catch((err)=>{
          console.log(err)
        })


        const id =element.billinfo.orderId

         
        //console.log(id)
       /*  const order = */
       await OrderServ.patch(id, {
          fulfilled:"True"
        }).then((resp)=>{
          
        }).catch((err)=>{
          console.log(err)
        })
        //console.log(order)
        
      }

      if (element.billinfo.bill_status==="Part Payment"){
       /*  const bill = await */ 
       BillServ.patch(element.billid, {
          'orderInfo.orderObj.fulfilled':"Partly"
        }).then((resp)=>{
          // console.resp
        }).catch((err)=>{
          console.log(err)
        })
        const id =bill.orderInfo.orderId
        const order =await OrderServ.patch(id, {
          fulfilled:"Partly"
        }).then((resp)=>{
          //console.resp
        }).catch((err)=>{
          console.log(err)
        })
        
      }

     

    })
    return context;

  };
};
