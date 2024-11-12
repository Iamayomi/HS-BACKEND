const nodemailer = require("nodemailer");
const { htmlToText } = require ("html-to-text");
const { authenticate } = require('@feathersjs/authentication').hooks;


const setDefaultValues = ()=>{
  return async (context)=>{
    if (!context.data) return context
    switch (context.method){
      case 'create':{
        const smtpConfig=context.app.get('smtp')
        if (context.data.html && ! context.data.text){
          context.data.text=htmlToText(context.data.html, { wordwrap: 130 })
        }
        context.data.from=context.data.from||`${smtpConfig.from.name}<${smtpConfig.from.address}>`
        context.data.name=context.data.name||`${context.data.to} | ${context.data.subject}>`
        context.data.status ='pending'

        break
      }
      default:{
        return
      }
    }
    //console.log(context.data)
    return context
  }
}


const sendEmail= () => async (context)=>{
  //console.log("this is our track", context.result)
  const server=context.app.service('facility-config')
  const smtpConfig=context.app.get('smtp')
  const smtps=await server.find({
    query:{
      organizationId:  context.data.organizationId, 
      'emailConfig.username':context.data.from  
    }
  })

 const smtp=smtps.data[0]
const transp={
  host:smtp.emailConfig.server,
  port:+smtp.emailConfig.smtp,
  secure:smtp.emailConfig.security,
  auth:{
    user:smtp.emailConfig.username,
    pass:smtp.emailConfig.password
  }
}
  const smtpTransport=nodemailer.createTransport(transp)
  let status='pending'
  let errorMessage=''
  let error =null

  try {
    await smtpTransport.sendMail({
      from:context.result.from,
      to:context.result.to,
      subject:context.result.subject,
      text:context.result.text,
      html:context.result.html,
      attachments:context.data.attachments||undefined,
    })
    status='complete'

  }catch (e){
    status='failed'
    errormessage=e.message 
    error = e
    //logger
   // console.log (e)
  }
  context.result =await context.service.patch(context.result._id,{status, errorMessage})
  if (error){
    throw error
  }
  return context

}




module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [setDefaultValues()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [sendEmail()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
