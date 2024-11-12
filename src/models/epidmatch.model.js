// epidmatch-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'epidmatch';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
   documentdetail: { type:Schema.Types.Mixed },
   documentname:{ type: String },
   documentClassId:{ type: Schema.Types.ObjectId, },
   documentType:{ type: String },
   createdBy:{ type: Schema.Types.ObjectId, ref:'user' },
   createdByname:{ type: String},
   locationId:{ type: Schema.Types.ObjectId, ref:'location' },
   location:{ type: String},
   facility:{ type: Schema.Types.ObjectId, ref:'facility' } ,
   facilityname:{ type: String } ,
   status:{ type: String , default:'completed'},
   client:{ type: Schema.Types.ObjectId, ref:'client' } ,
   location:{
    long:{ type: String },
    lat:{ type: String },
    city:{ type: String },
    ward:{ type: String },
    lga:{ type: String },
    state:{ type: String },
    country:{ type: String }
   },
   officer:{ type: Schema.Types.ObjectId, ref:'employee' }

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
