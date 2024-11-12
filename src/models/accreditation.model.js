// accreditation-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "accreditation";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      organizationName: { type: String },
      organizationId: { type: Schema.Types.ObjectId },
      facilityname: { type: String },
      facilityId: { type: Schema.Types.ObjectId },
      details: [{ type: Schema.Types.Mixed }],
      createdbyName: { type: String },
      createdby: { type: Schema.Types.ObjectId, ref: "employee" },
      assessmentName: { type: String },
      assessmentId: { type: Schema.Types.ObjectId },
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
