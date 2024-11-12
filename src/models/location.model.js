// location-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "location";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      facility: {
        type: Schema.Types.ObjectId,
        ref: "facility",
        required: true,
      },
      name: { type: String, required: true },
      locationType: { type: String },
      branch: { type: String },
      branchId: { type: Schema.Types.ObjectId },
      sublocations: [
        {
          type: { type: String },
          typeName: { type: String },
          availability: { type: Boolean },
          /*   subUnit:[{
        unittype: {type: String },
        unitname:{type: String },
       }] */
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
