// accpersons-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {

  const modelName = "accpersons";

  const mongooseClient = app.get("mongooseClient");

  const { Schema } = mongooseClient;

  const schema = new Schema({
      data: { type: Schema.Types.Mixed },
    },
    {
      timestamps: true,
    });

  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
