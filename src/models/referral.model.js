// referral-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "referral";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      source_appointmentId: { type: Schema.Types.ObjectId },
      source_appointment: { type: Schema.Types.Mixed },
      source_admissionId: { type: Schema.Types.ObjectId },
      source_admission: { type: Schema.Types.Mixed },
      clientId: { type: Schema.Types.ObjectId, required: true },
      client: { type: Schema.Types.Mixed },
      policy: { type: Schema.Types.Mixed }, //hmo patient
      patient_type: { type: String },
      priority: { type: String },
      provisionalDiagnosis: { type: String },
      reason_for_request: { type: String },
      investigations: { type: String },
      source_orgId: { type: Schema.Types.ObjectId },
      source_org: { type: Schema.Types.Mixed },
      source_org_unit: { type: Schema.Types.Mixed }, //team
      source_org_location: { type: Schema.Types.Mixed },
      createdById: { type: Schema.Types.ObjectId }, //employee id(user)
      createdBy: { type: Schema.Types.Mixed }, //employe name
      dest_orgId: { type: Schema.Types.ObjectId },
      dest_org: { type: Schema.Types.Mixed },
      dest_org_unit: { type: Schema.Types.Mixed }, //team
      dest_org_location: { type: Schema.Types.Mixed },
      dest_org_acceptance: { type: String, default: "Pending" }, //pending,accepted, rejected
      employee_referred_to: { type: Schema.Types.Mixed }, //person
      HMO_acceptance: { type: String, default: "Pending" },
      HMO: { type: Schema.Types.Mixed },
      //policy:{type: Schema.Types.Mixed,},
      referralNo: { type: String },
      referralReason: { type: String },
      referralnote: { type: Schema.Types.Mixed }, // documentation
      status: { type: String, default: "Open" }, //open, closed
      referral_type: { type: String }, //clinical, diagnostic,business
      convo: [{ type: Schema.Types.Mixed }],
      task: [{ type: Schema.Types.Mixed }],
      urgency: { type: String },
      fin_tranx: { type: Schema.Types.Mixed }, //{amount, commission due, paid, note}
      statusHx: [
        {
          status: { type: String },
          Comments: { type: String },
          actor: { type: Schema.Types.Mixed },
          action_time: { type: Date, default: Date.now },
        },
      ],
      dest_appointmentId: { type: Schema.Types.ObjectId },
      dest_appointment: { type: Schema.Types.Mixed },
      actionsHx: [
        {
          action: { type: String },
          actor: { type: Schema.Types.Mixed },
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
