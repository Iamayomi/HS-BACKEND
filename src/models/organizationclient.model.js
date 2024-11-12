// organizationclient-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'organizationclient';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facility: { type: Schema.Types.ObjectId, ref:'facility', required:true },//primary org
    organization: { type: Schema.Types.ObjectId, ref:'facility'  }, //secondary org
    relationshiptype: { type: String, required: true },//
    code:{ type: String },
    band: { type: String },
    active:{ type:Boolean, default:true },
    accreditation:[{ type:Schema.Types.Mixed}],
    chat:[{ type:Schema.Types.Mixed}],
    uploads:[{ type:Schema.Types.Mixed}],
    info:[{ type:Schema.Types.Mixed}],
    status: { type: String , default:"Pending"},
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
