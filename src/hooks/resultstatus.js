// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
  
    let status = context.data.status
    const BillServ=context.app.service('bills')
    await BillServ.patch(context.result.billId,{
      report_status: context.result.status
    })

    if (status==='Final'){
      // write to clinical document
      const clinical = context.app.service('clinicaldocument')
      let data= context.result
      await clinical.create(data)

    }

    

    return context;
  };

};
