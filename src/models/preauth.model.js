// preauth-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "preauth";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      provider: { type: Schema.Types.Mixed },
      clinical_details: { type: Schema.Types.Mixed }, //clinical finds, symptoms etc
      hmopayer: { type: Schema.Types.Mixed },
      convo: [{ type: Schema.Types.Mixed }], //chats
      services: [{ type: Schema.Types.Mixed }], //  include reference to tariff
      totalamount: { type: Number },
      hmoPlan: { type: Schema.Types.Mixed },
      comments: { type: String },
      beneficiary: { type: Schema.Types.Mixed },
      sponsor: { type: Schema.Types.Mixed },
      submissiondate: { type: Date },
      submissionby: { type: Schema.Types.Mixed },
      approval: [{ type: Schema.Types.Mixed }], //should include date and time
      approvedAmount: { type: Number },
      approvedDateFinal: { type: Date },
      policy: { type: Schema.Types.Mixed },
      patientstate: { type: Schema.Types.Mixed }, //inpatient or outpatient
      paDuration: { type: Schema.Types.Mixed },
      encounterDocumentation: { type: Schema.Types.Mixed },
      preauthCode: [{ type: Schema.Types.Mixed }],
      urgency: { type: String },
      terminologyCode: [{ type: Schema.Types.Mixed }],
      preauthid: { type: String },
      appointmentid: { type: Schema.Types.ObjectId },
      admissionid: { type: Schema.Types.ObjectId },
      statushx: [{ type: Schema.Types.Mixed }],
      task: [{ type: Schema.Types.Mixed }],

      geolocation: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ["Point"], // 'location.type' must be 'Point'
          required: false,
        },
        coordinates: {
          type: [Number],
          required: false,
        },
      },

      approvalprocess: [{ type: Schema.Types.Mixed }],
      /*   paymentStatus:{type:Schema.Types.Mixed},
    paymentDate:{type: Date},
    paymentAmount:{type:Number}, */
      status: { type: String, default: "submitted" }, //declined,queried, submitted, vetted, approval started, approval complete,queued for payment, payment instruction sent,paid
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
