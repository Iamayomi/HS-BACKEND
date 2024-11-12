// complaints-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "complaints";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      /*  provider:{type:Schema.Types.Mixed}, */
      /*  hmopayer:{type:Schema.Types.Mixed},
    sponsor:{type:Schema.Types.Mixed}, */
      subject: { type: Schema.Types.Mixed },
      category: { type: Schema.Types.Mixed },
      complaint: { type: Schema.Types.Mixed },
      from: {
        type: { type: String }, //person or organization
        entity: { type: Schema.Types.Mixed },
      },
      to: {
        type: { type: String }, //person or organization
        entity: { type: Schema.Types.Mixed },
      },
      copied: [
        {
          type: { type: String }, //person or organization
          entity: { type: Schema.Types.Mixed },
        },
      ],
      convo: [{ type: Schema.Types.Mixed }],
      beneficiary: { type: Schema.Types.Mixed },
      submissiondate: { type: Schema.Types.Mixed },
      submissionby: { type: Schema.Types.Mixed },
      resolvedby: { type: Schema.Types.Mixed },
      resolvedate: { type: Schema.Types.Mixed },
      resolution: { type: Schema.Types.Mixed },
      policyid: { type: Schema.Types.Mixed },
      patientstate: { type: Schema.Types.Mixed }, //inpatient vs outpatient
      createdBy: { type: String },
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
