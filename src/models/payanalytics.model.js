// payanalytics-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "payanalytics";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      text: { type: String, required: true },
      convo: [{ type: Schema.Types.Mixed }], ////chats
      services: [{ type: Schema.Types.Mixed }],
      totalamount: { type: Number },
      proposedamount: { type: Number },
      comments: { type: String },
      beneficiary: { type: Schema.Types.Mixed },
      sponsor: { type: Schema.Types.Mixed },
      submissiondate: { type: Date },
      submissionby: { type: Schema.Types.Mixed },
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
