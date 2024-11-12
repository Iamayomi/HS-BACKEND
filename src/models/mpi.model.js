// mpi-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'mpi';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facility:{ type: Schema.Types.ObjectId, ref:'facility' } ,
    facilityname:{ type: String } ,
    mrn:{ type: String } ,
    clientTags:{ type: String },
    status:{ type: String , default:'active'},
    client:{ type: Schema.Types.ObjectId, ref:'client' } 
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
