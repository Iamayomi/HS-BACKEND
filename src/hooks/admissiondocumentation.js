// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const documentServ=context.app.service('clinicaldocument')
    const orderServ=context.app.service('order')

    const admitdoc = context.data.documentation

    //write document
    await documentServ.create(admitdoc).then()
  .catch((err)=>console.log(err))

  //update order

  const admitorder= context.data.order._id
 /*  console.log(context.data)
  console.log("result") */
 await orderServ.patch(
    admitorder,
    {
    fulfilled:"True",
    order_status:"Fulfilled",
    }).then()
  .catch((err)=>console.log(err))

    return context;
  };
};
