module.exports = {
  'host': 'localhost',
  'port': 8080,
  'public': '../public/',
  'fileu':'../uploads/',
  'paginate': {
    'default':100,
    'max': 100
  },
  'authentication': {
    'entity': 'user',
    'service': 'users',
    'secret': '/bPj3Lp34XPy8ceLi/pwBW8ymvc=',
    'authStrategies': [
      'jwt',
      'local'
    ],
    'jwtOptions': {
      'header': {
        'typ': 'access'
      },
      'audience': 'https://yourdomain.com',
      'issuer': 'feathers',
      'algorithm': 'HS256',
      'expiresIn': '1d'
    },
    'local': {
      'usernameField': 'email',
      'passwordField': 'password'
    }
  },
  // 'mongodb': process.env.MONGODB ,
  // 'accessKeyId': process.env.ACCESSKEYID,
  // 'secretAccessKey': process.env.ACCESSSECRETKEY,
  // 's3Bucket': process.env.BUCKET,
  // 's3Endpoint': process.env.S3ENDPOINT,
  // 'sendgridApiKey': process.env.SENDGRIDKEY,
  // 'emailLinkHostPrefix': 'http://localhost:3030',

  'mongodb': "mongodb+srv://ayomidesherif2019:nr7RCjn36amnD5jC@cluster0.tpfcc.mongodb.net/hs-backend?retryWrites=true&w=majority&appName=Cluster0",
  'accessKeyId': process.env.ACCESSKEYID,
  'secretAccessKey': process.env.ACCESSSECRETKEY,
  's3Bucket': process.env.BUCKET,
  's3Endpoint': process.env.S3ENDPOINT,
  'sendgridApiKey': process.env.SENDGRIDKEY,
  'emailLinkHostPrefix': 'http://localhost:3030',
  
};
