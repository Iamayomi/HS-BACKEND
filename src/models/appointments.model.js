// appointments-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "appointments";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      facility: { type: Schema.Types.ObjectId },
      locationId: { type: Schema.Types.ObjectId },
      practitionerId: { type: Schema.Types.ObjectId },
      clientId: { type: Schema.Types.ObjectId, required: true }, //membership id too
      firstname: { type: String },
      middlename: { type: String },
      lastname: { type: String },
      dob: { type: Date },
      gender: { type: String },
      phone: { type: String },
      email: { type: String, lowercase: true },
      hmo: { type: Schema.Types.Mixed },
      sponsor: { type: Schema.Types.Mixed },
      policy: { type: Schema.Types.Mixed },
      client: { type: Schema.Types.Mixed },
      date: { type: Date },
      start_time: { type: Date },
      end_time: { type: Date },
      appointment_reason: { type: String },
      appointmentClass: { type: String },
      //billingservice:{ type: Schema.Types.ObjectId,  }, //need to fix this after billing setup
      appointment_type: { type: String }, //lab,patient
      appointment_status: { type: String }, //pending,started,completed,cancelled, suspended
      information: { type: String },
      practitioner_name: { type: String },
      practitioner_profession: { type: String },
      practitioner_department: { type: String },
      location_name: { type: String },
      location_type: { type: String },
      otp: { type: String },
      approved: { type: Boolean, default: false },
      verified: { type: Boolean, default: false },
      organization_type: { type: String },
      referral: { type: Schema.Types.ObjectId },
      policyIds: [{ type: Schema.Types.ObjectId }], //hmo id ishere
      actions: [
        {
          status: { type: String },
          actor: { type: Schema.Types.ObjectId },
          action_time: { type: Date, default: Date.now },
        },
      ],
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
