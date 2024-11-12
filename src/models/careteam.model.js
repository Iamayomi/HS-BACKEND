// careteam-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'careteam';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
   
      name: { type: String },
      description: { type: String },
      leadPractitioner: { type: String },
      startDate: { type: String },
      status: { type: String },
      facilityId:{ type: Schema.Types.ObjectId},
     members: [{
       
        name: { type: String },
        role: { type: String },
        employeeid:{ type: Schema.Types.ObjectId}
      }]
    
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
