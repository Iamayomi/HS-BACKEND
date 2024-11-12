// members-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "members";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      firstname: { type: String, required: true },
      middlename: { type: String },
      lastname: { type: String, required: true },
      dob: { type: Date, required: true },
      gender: { type: String },
      maritalstatus: { type: String },
      religion: { type: String },
      phone: { type: String, required: true },
      email: { type: String, lowercase: true, unique: false }, //unique: true
      profession: { type: String },
      nin: { type: String },
      stateOrigin: { type: String },
      langSpeak: { type: String },
      langWrite: { type: String },
      langRead: { type: String },
      employementStatus: { type: String },
      residentialAddress: { type: String },
      permanentAddress: { type: String },
      phone2: { type: String },
      whatsapp: { type: String },
      emergencyContactname: { type: String },
      emergencyContactphone: { type: String },
      emergencyContactemail: { type: String },
      emergencyContactRelationship: { type: String },
      department: { type: String },
      currentSundaySchool: { type: String },
      nameSundayScholTeacher: { type: String },
      doingforGod: { type: String },
      specificDetails: { type: String },
      clientTags: { type: String },
      mrn: { type: String },
      address: { type: String },
      city: { type: String },
      lga: { type: String },
      state: { type: String },
      country: { type: String },
      nok_name: { type: String },
      nok_phoneno: { type: String },
      nok_email: { type: String },
      nok_relationship: { type: String },
      facility: {
        type: Schema.Types.ObjectId,
        ref: "facility",
        required: true,
      },
      imageurl: { type: String },
      level: { type: String, default: "1" },
      alive: { type: Boolean, default: true },
      active: { type: Boolean, default: true },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
