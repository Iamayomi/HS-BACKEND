// facilityConfig-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'facilityConfig';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({

    organizationId:{ type: Schema.Types.ObjectId }, 
    organizationName:{ type: String },
    emailConfig:{
      note: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
      server: { type: String, required: true },
      smtp: { type: String, required: true },
      security: { type:Boolean , required: true },
    }
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
