// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {


  return async context => {
    const subwalletServ=context.app.service('subwallet')
    const extsubwalletServ=context.app.service('extsubwallet')
    const query=context.params.query
    //console.log(query)
    const walletBalance=await extsubwalletServ.find(query)
    const result = context.result
   // console.log(context.result.total)
    if (context.result.total===0){
      const walletBalance1=await subwalletServ.find(query)
      if (walletBalance1.total>0){
        const creatobj={
          ...walletBalance1.data[0],
          subwalletId:walletBalance1.data[0]._id
        }
        delete creatobj._id 
   /* await extsubwalletServ.create(creatobj) */
  // context.result=walletBalance1
  // console.log("extwalletbalance",walletBalance1)
      }

    } 



    return context;
  };
};
