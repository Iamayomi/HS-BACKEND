// fintrx-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'fintrx';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    message:{ type:Schema.Types.Mixed },
    subwalletId: { type: Schema.Types.ObjectId },
    clientname: { type: String },
    facilityname: { type: String },
    facilityId: { type: Schema.Types.ObjectId },
    cllientId: { type: Schema.Types.ObjectId },
    channel:{ type: String },//remita,paystack,flutterwave etc
    amount:{type:Number}
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
