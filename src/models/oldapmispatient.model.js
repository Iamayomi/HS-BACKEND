// oldapmispatient-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'oldapmispatient';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    personId: { type: Schema.Types.ObjectId, required: false },
        facilityId: { type: Schema.Types.ObjectId, required: false },
        isActive: { type: Boolean, 'default': false },
        paymentPlan: [{ type: Schema.Types.Mixed }],
        orders: [{ type: String, required: false }],
        isUnknown:{ type: Boolean, 'default': false },
        tags: [{ type: Schema.Types.Mixed, required: false }],
        clientsNo: [{ type: Schema.Types.Mixed }],
        timeLines: [{ type: Schema.Types.Mixed, required: false }],
        documentationAuthorizationCode: { type: Schema.Types.Mixed },
        deleted: { type: Boolean, 'default': false }
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
