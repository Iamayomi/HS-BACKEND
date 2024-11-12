// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const loginserv=context.app.service("logins")
    const thirtyDaysAgo = new Date();

  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 90);

 const logins= await loginserv.find({
    query:{
      type:"login",
      createdAt: {
        $gte: thirtyDaysAgo,
      },
    },
    paginate:false
  })
 /*  context.params.query = {
    ...context.params.query,
  
  }; */
 
  context.result=logins

    return context;
  };
};
