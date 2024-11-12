// notification-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "notification";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      message: { type: Schema.Types.Mixed },
      type: { type: String },
      title: { type: String, required: true },
      description: { type: String, required: false },
      isRead: [{ type: Schema.Types.Mixed }],
      priority: { type: String },

      dest_userId: [{ type: Schema.Types.ObjectId }],
      dest_locationId: [{ type: Schema.Types.ObjectId }],
      dest_teamId: [{ type: Schema.Types.ObjectId }],
      dest_unitId: [{ type: Schema.Types.ObjectId }],
      dest_personId: [{ type: Schema.Types.ObjectId }],

      facilityId: { type: String, required: true },
      sender: { type: String, required: false },
      senderId: { type: Schema.Types.ObjectId },
      pageUrl: { type: String },
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
