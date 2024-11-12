// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const mpiServ=context.app.service('mpi')
    const newClient = {
     client: context.result._id,
     facility:context.result.facility,
     mrn:context.result.mrn,
    clientTags:context.result.clientTags,
     relfacilities:context.result.relatedfacilities||[]
    }
    await mpiServ.create(newClient)

/* 
     const allpatient=await context.app.service('client').find({
      query:{},
      paginate:false
    })
    //console.log(allpatient)

     for (pat of allpatient){
      const newPat = {
        client: pat._id,
        facility:pat.facility,
        mrn:pat.mrn,
        clientTags:pat.clientTags,
      relfacilities:pat.relatedfacilities||[]
       }
       await mpiServ.create(newPat)
       //update relatedfacilities

    } */
 
    //console.log(allpatient.length)
    return context;
  };
};
