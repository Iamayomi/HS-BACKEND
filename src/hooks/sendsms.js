// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const axios = require('axios');

// eslint-disable-next-line no-unused-vars

module.exports = (options = {}) => {
  return async context => {
    const{message, receiver}=context.data
    const smsServer=  context.app.service('sendsms')

    axios
    .post(
      "https://mps.test.digitalpulseapi.net/1.0/send-sms/anq",
   
   {
        "sender": "55019",
        "message":message ,//"Sample message at first trial from Healthstack ",
        "receiver": receiver,//"2348036648712"
        },
        {headers: {"Content-Type":"application/json" , "api-key": "Hla6S2SsLnXY2HsdFjd0CYQ1w"}},
      
    )
    .then(async res => {
      //console.log(res)
      await smsServer.patch(context.result._id, {response:res.data, delivered:true})
     
/* 
      await employeeServer
        .patch(documentId, {imageurl: imageUrl})
        .then(res => {
        })
        .catch(err => {
            console.log(err)
       
        });*/
    })
    .catch(err => {
   
      console.log(err);
    });

    return context;
  };
};
