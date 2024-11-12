// clinicaldocument-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'clinicaldocument';
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
    client:{ type: Schema.Types.ObjectId, ref:'client' },
    episodeofcare_id:{ type: Schema.Types.ObjectId},
    deleted:{ type: Boolean, default: false },
    familyprofileId: { type: Schema.Types.ObjectId, },
    geolocation: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: false
      },
      coordinates: {
        type: [Number],
        required: false
      }
    }
   
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
