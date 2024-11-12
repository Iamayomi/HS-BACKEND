// email-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'email';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    organizationId:{ type: Schema.Types.ObjectId }, 
    organizationName:{ type: String },
    
   name: { type: String, required: true, index: true },
   from: { type: String, required: true, index: true },
   to: { type: String, required: true, index: true },
   subject: { type: String, required: true,  },
   text: { type: String, required: true,  },
   html: { type: String, required: true,  },
   attahments:[{  type: Schema.Types.Mixed,    /*  filename: { type: String,   },  path: { type: String,   }, */   }],
   status:{
     type: String, required: true, enum:["pending","complete","failed"],
     default:"pending",required:true, index:true
   },
   errorMessage:{type:String}

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
