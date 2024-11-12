// oldapmispeople-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'oldapmispeople';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    apmisId: {
      type: String,
      required: false
  },
  title: {
      type: String,
      required: false
  },
  firstName: {
      type: String,
      required: false
  },
  lastName: {
      type: String,
      required: false
  },
  gender: {
      type: String,
      required: false
  },
  motherMaidenName: {
      type: String,
      required: false
  },
  securityQuestion: {
      type: String,
      required: false
  },
  securityAnswer: {
      type: String,
      required: false
  },
  primaryContactPhoneNo: {
      type: String,
      required: false
  },
  secondaryContactPhoneNo: [{
      type: String,
      required: false
  }],
  dateOfBirth: {
      type: Date,
      require: false
  },
  email: {
      type: String,
      required: false
  },
  otherNames: {
      type: String,
      required: false
  },
  bloodGroup: {
      type: String,
      required: false
  },
  genotype: {
      type: String,
      required: false
  },
  biometric: {
      type: Buffer,
      required: false
  },
  personProfessions: {
    type: Schema.Types.Mixed,
    required: false
},
  nationality: {
      type: String,
      required: false
  },
  stateOfOrigin: {
      type: String,
      required: false
  },
  lgaOfOrigin: {
      type: String,
      required: false
  },
  profileImageObject: {
      type: Schema.Types.Mixed,
      required: false
  },
  homeAddress: {
      type: Schema.Types.Mixed,
      required: false
  },
  maritalStatus: {
      type: Schema.Types.String,
      required: false
  },
  nextOfKin: [{
      type: Schema.Types.Mixed,
      required: false
  }],
  deleted: { type: Boolean, 'default': false },
  wallet: {
      type: Schema.Types.Mixed,
      select: false,
  },
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
