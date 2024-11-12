// malehx-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'malehx';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    patientId:{ type: Schema.Types.ObjectId},
    facilityId:{ type: Schema.Types.ObjectId},
    profileid:{ type: Schema.Types.ObjectId},
      dob: { type: String },
      noOfPregnancies: { type: Number },
      erectileOrEjaculatoryConcerns: { type: String },
      spermCount: { type: String },
      spermMotility: { type: String },
      medicalIllnessHistory: { type: String },
      pastSurgeryHistory: { type: String },
      smokingHistory: { type: String },
      alcoholHistory: { type: String }
    
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
