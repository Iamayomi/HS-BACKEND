// femalehx-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'femalehx';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    patientId:{ type: Schema.Types.ObjectId},
    facilityId:{ type: Schema.Types.ObjectId},
    profileid:{ type: Schema.Types.ObjectId},
    femaleHistory: [{
      menarche: { type: String },
      lmp: { type:Date }, // might eed this to claculate preganancy duration
      ketamenia: { type: String },
      pelvicInfectionHistory: { type: String },
      pelvicSurgeryHistory: { type: String },
      pregnancyHistory: { type: String },
      pregnancyHistoryMiscarriage: { type: String },
      pregnancyHistoryDeliveries: { type: String },
      noOfLiveChildren: { type: Number },
      medicalIllnessHistory: { type: String },
      surgicalInterventionHistory: { type: String },
      currentMedication: { type: String },
      smokingHistory: { type: String },
      breastMilkDischargeHistory: { type: String },
      alcoholUseHistory: { type: String },
      createdAt:{type:Date}
    }],
    femaleInvestigations: [{
      hsg: { type: String },
      laparoscopy: { type: String },
      sonohysterogram: { type: String },
      hsysteroscopy: { type: String },
      hormonalProfile: { type: String },
      createdAt:{type:Date}
    }],
    fertilityTreatments:[ {
      clompheneAndIntercourse: { type: String },
      clompheneAndInsemination: { type: String },
      ivf: { type: String },
      Icsi: { type: String },
      date: { type: Date }
    }]
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
