// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const { NotFound, GeneralError, BadRequest } = require('@feathersjs/errors');
module.exports = (options = {}) => {
  return async context => {
    const inventServ=context.app.service('inventory')
    const transServ= context.app.service('inventorytransaction')
  

    /* console.log(context.result)
    console.log(context.data) */
    context.result.productitems.forEach( async element => {
      //find if item exist in inventory
       const exist= await inventServ.find({
         query:{
           productId:element.productId,
           storeId:context.result.storeId,
           facility:context.result.facility
         }
       })
     //  console.log(exist.data.length)
      // if it does, update the details basedo n the transaction category
      if (exist.data.length){
         try{
              if (context.result.transactioncategory==="credit"){
                 if (context.result.type === "Purchase Invoice"||context.result.type === "transfer"){ 
                await inventServ.patch(exist.data[0]._id,
                    {
                      quantity:exist.data[0].quantity+element.quantity,
                      stockvalue:exist.data[0].stockvalue+element.amount,
                      costprice:(exist.data[0].stockvalue+element.amount)/(exist.data[0].quantity+element.quantity)
                    })
                  }
            //  console.log("product exist, updated datapoints")
              // write transaction
              // else
              if (context.result.type === "Audit" ||context.result.type === "Initialization" ){ 
               await inventServ.patch(exist.data[0]._id,
                    {
                      quantity:element.quantity,
                      stockvalue:element.amount,
                      costprice:element.costprice?element.costprice:exist.data[0].costprice
                    })
                  }

              
              

            }else{
            //  console.log("debit")
                if ((exist.data[0].quantity-element.quantity)>=0){
              const cp=exist.data[0].stockvalue/exist.data[0].quantity
              await inventServ.patch(exist.data[0]._id,
                {
                
                  quantity:exist.data[0].quantity-element.quantity,
                  stockvalue:exist.data[0].stockvalue-(element.quantity*Number(cp))   //element.amount,
                  //costprice:(exist.data[0].stockvalue+element.amount)/(exist.data[0].quantity+element.quantity)

                })
                }else{
                  const existing = new GeneralError(new Error('Inventory insufficient'))
                  console.log("insufficient inventory")
                }

            }
           // console.log("creating transaction history for existing item")
            //write transaction
            await transServ.create({
              facility: context.result.facility,
              storeId: context.result.storeId,
              type: context.result.type,
              documentNo: context.result.documentNo,
              date: context.result.date,
              paricipant: context.result.source,
              createdby: context.result.createdby,
              transactioncategory: context.result.transactioncategory, //credit=entry , debit=exit
              inventoryId:exist.data[0]._id,
              productentryId:context.result._id,
              costprice: element.costprice||null,
              sellingprice: element.sellingprice||null,
              quantity: element.quantity,
              productId: element.productId,
              name:element.name,
              baseunit: element.baseunit,
              amount:element.amount,
              billingId:exist.data[0].billingId,
            })

            }catch(err){

              console.log("error from transaction entry", err)
            }

      }else{
       // console.log(element)

       if (context.result.transactioncategory==="credit"){
         //if it does not exist in inventory, create new inventory and new billing service
         try{
          const invent= await inventServ.create({
          facility: context.result.facility,
          storeId:context.result.storeId,
          productId:element.productId, 
          serviceId:null,
          name: element.name,
          baseunit: element.baseunit,
          quantity:element.quantity,
          reorder_level: null,
        
          costprice: element.costprice,
          sellingprice:null,
          stockvalue:element.amount,
          category:null, //find product category
          SKU:null,
          batches:[]
             })
       //   console.log("product does not exist, created datapoints")
      // 
      
      //create billing service (first class citizen)
          const bill= await context.app.service('billing').create({
            name:element.name,
            facility:  context.result.facility,
            productId: element.productId,
            baseunit: element.baseunit,
            inventoryId:invent._id, 
            serviceId: null,
            service_name: "",
            category: "Inventory",
            facilityname:"",
          
            contracts:[
              {   // contracts that contain different pricing ie insurance etc
            source_org:context.result.facility ,
            source_org_name:"",
            dest_org:context.result.facility ,
            dest_org_name:"",
            billing_type:"Cash",
            price:0}]

          })
    // update inventory with billing id
    await inventServ.patch(
      invent._id,
      {billingId:bill._id}
      )
      // write transaction
      await transServ.create({
        facility: context.result.facility,
        storeId: context.result.storeId,
        type: context.result.type,
        documentNo: context.result.documentNo,
        date: context.result.date,
        paricipant: context.result.source,
        createdby: context.result.createdby,
        transactioncategory: context.result.transactioncategory, //credit=entry , debit=exit
        inventoryId:invent._id,
        productentryId:context.result._id,
        costprice: element.costprice||null,
        sellingprice: element.sellingprice||null,
        quantity: element.quantity,
        productId: element.productId,
        name:element.name,
        baseunit: element.baseunit,
        amount:element.amount,
        billingId:bill._id,
      })
  
            }catch(err){
            console.log("error from does not exist block", err)
            }

          } else {
            const existing = new GeneralError(new Error('Does not exist'))
           // throw Error
           console.log("it does not exist")
          }
        } 

    });

    //console.log(console.result)
    //context.result
    //check for each productitem
      //if the product already exist in inventory
        //if yes: update the quantity
          // record the transction
            //invert the header
      // if no: create the inventory
          //record the
          // transaction 
            //invert the header

    return context;
  };
};
