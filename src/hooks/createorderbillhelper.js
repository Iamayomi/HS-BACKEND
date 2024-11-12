// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const orderbillServ=context.app.service('orderbillhelper')
   // console.log(context.data)

    const object={
     order: context.data.orderInfo.orderObj.order,
     product:context.data.serviceInfo.name,
     productId:context.data.serviceInfo.productId
    } 
    await orderbillServ.create(object)

    return context;
  };
};
