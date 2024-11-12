// sendsms-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'sendsms';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    message: { type: String, required: true },
    receiver: { type: String, required: true },
    response:{ type:Schema.Types.Mixed},
    delivered:{ type: Boolean,default: false },
    facilityName: { type: String, },
    facilityId: { type: Schema.Types.ObjectId,},
    subject: { type: String, },
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
