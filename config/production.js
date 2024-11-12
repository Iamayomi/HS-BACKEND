module.exports = {
  'host': 'healthstack-backend.herokuapp.com',
  'port': process.env.PORT,
  'mongodb': process.env.MONGODB,
  'accessKeyId': process.env.ACCESSKEYID,
  'secretAccessKey': process.env.ACCESSSECRETKEY,
  's3Bucket': process.env.BUCKET,
  's3Endpoint': process.env.S3ENDPOINT,
  'emailLinkHostPrefix': process.env.EMAILLINKHOST,
  /* "twilioSID": process.env.twiliosid,
  "twilioToken": process.env.twiliotoken, */
};
