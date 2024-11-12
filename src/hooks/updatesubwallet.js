// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const subwalletServ=context.app.service('subwallet')
    const transServ= context.app.service('subwallettransactions')
    const transWalletServ= context.app.service('wallettransaction')

    //check if subwallet exist
      //if exist : update subwallet
      //if not create wallet
      

      const exist= await subwalletServ.find({
        query:{
          client:context.result.client,
          organization:context.result.organization
        }
      })
    //console.log("exist", exist)
      if (exist.data.length>0){  
        // update wallet of hospital
        if(context.result.category==="credit"){ 
        const deposit= await subwalletServ.patch( exist.data[0]._id,{
          amount:Number( exist.data[0].amount) + Number(context.result.amount)
        })
        const walletinfo=context.result
        walletinfo.subwallet=exist.data[0]._id
        const updatewallet= await transWalletServ.create(walletinfo)
       // const updatewallet= transWalletServ.create() 
      }
        else{
         /*  console.log(xist.data[0].amount, context.result.amount)
          const deposit= await subwalletServ.patch(exist.data[0]._id,{
            amount:Number( exist.data[0].amount) - Number(context.result.amount)
          }) */
        }
        //update
      }else{
      //create
        const obj={
          client: context.result.client, 
          organization: context.result.organization,
          name: context.result.fromName,
          amount:context.result.amount,
          status:"Active",
          //orgType:context.result.client, //client,organization
          orgName:context.result.toName,
          clientName:context.result.fromName
        }

      const deposit= await subwalletServ.create(obj)
      //  console.log(deposit)
      //update wallet
      const walletinfo=context.result
        walletinfo.subwallet=deposit._id
        await transWalletServ.create(walletinfo)  //const updatewallet= 

      }

    
    return context;
  };
};
