// casedefinition-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'casedefinition';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    disease: { 
      name:{type: String, required: true} ,
      icdcode:{type: String, } ,
      snomed:{type: String, } ,
      icdver:{type: String, } ,
      snomedver:{type: String, } ,
    
    }, 
    notificationtype:{type: String, } ,
  observations:[
    {
      category:{type: String, } ,
      name:{type: String, } ,
      duration:{type: String, } ,
      note:{type: String, } ,
      snomed:{type: String, } ,
      response:{type: String, } ,
      required:{type:Boolean},
      value:{type: String, } 
    }

  ],
  symptoms:{type: String, },
  signs:{type: String, },
  casedefinition:{type: String, },
  facility:{ type: Schema.Types.ObjectId },
  labconfirmation:{type: String, },
  treatmentprotocol:{type: String, },
  network:[{type:Schema.Types.Mixed }],
  notification_destination:[
    {type:String}
  ],
 
  createdby:{type: Schema.Types.ObjectId}
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
