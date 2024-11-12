// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const walletServ=context.app.service('wallet')
    const transServ= context.app.service('wallettransaction')
   // const transWalletServ= context.app.service('wallettransaction')

    //check if wallet exist
      //if exist : update wallet
      //if not create wallet
      

      const exist= await walletServ.find({
        query:{
          wallet:context.result.facility
        }
      })
    //console.log("exist", exist)
      if (exist.data.length){  // update wallet of hospital

        if(context.result.category==="credit"){ 
        const deposit= await walletServ.patch( exist.data[0]._id,{
          amount:Number( exist.data[0].amount) + Number(context.result.amount)
        })
       /*  const walletinfo=context.result
        walletinfo.wallet=exist.data[0]._id
        const updatewallet= await transWalletServ.create(walletinfo) */
        
      }

         if(context.result.category==="dedit"){
          const deposit= await walletServ.patch(exist.data[0]._id,{
            amount:Number( exist.data[0].amount) - Number(context.result.amount)
          })
        }
        //update
      }else{
      //create
      //?? need to check who is
      //if hospital
      //console.log(context.result)
        const obj={
          wallet: context.result.facility,
          name: context.result.toName,
          amount:context.result.amount,
          status:"Active",
          orgType:"Client", //client,organization
          
        }
        //console.log(obj)
      const deposit= await walletServ.create(obj)
      //  console.log(deposit)
      //update wallet
     /*  const walletinfo=context.result
        walletinfo.subwallet=deposit._id
        const updatewallet= await transWalletServ.create(walletinfo) */

      }

    
    return context;
  };
};
