// epidalerts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'epidalerts';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
     
disease:{ type: String, required: true },
caseDefinition_id:{ type: Schema.Types.ObjectId, },
location:{ type: String,  },
facilityId:{ type: Schema.Types.ObjectId, },
facility:{ type: String,  },
notified_by:{ type: String, },
notified_by_name:{ type: String, },
notified_by_id:{ type: Schema.Types.ObjectId, },
notification_type:{ type: String,  },
status:{ type: String,  },
action:{ type: String, },
person_notified:{ type: String, },
person_notified_type:{ type: String, },
observations: { type:Schema.Types.Mixed },
match:[ { type:Schema.Types.Mixed }],
client:{ type: Schema.Types.ObjectId, },
notification_origin_id:{ type: Schema.Types.ObjectId, },
notification_origin_name:{ type: String, },
geolocation: {
  type: {
    type: String, // Don't do `{ location: { type: String } }`
    enum: ['Point'], // 'location.type' must be 'Point'
    required: false
  },
  coordinates: {
    type: [Number],
    required: false
  },},
actionhx:[
  {action:{ type:Schema.Types.Mixed }}
]
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
