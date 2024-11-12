// treatmentsheet-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'treatmentsheet';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    order_category: { type: String, },
    order: { type: String, required: true },
    instruction: { type: String,  },
   
    status: { type: String, default: "pending", required: true}, //result ready
      requestingdoctor_Id: { type: Schema.Types.ObjectId,  },
      requestingdoctor_Name:  { type: String,  },
      requestingdoctor_locationId:{ type: Schema.Types.ObjectId,  },
      requestingdoctor_locationName: { type: String,  },
      requestingdoctor_facilityId:{ type: Schema.Types.ObjectId, },
      requestingdoctor_facilityname: { type: String,  },
     
     clientId: { type: Schema.Types.ObjectId, required: true },
     encounter: { type: Schema.Types.ObjectId, },
     //userid?employeeId
    
    
    treatment_action:[
      {actorname:{type: String} , 
      actorId:{type: Schema.Types.ObjectId} , 
      action:{type: String}, 
      description:{type: String}, 
      createdat:{type:Date , default:Date.now},  
    }],  //action=accept, decline, fulfill
    orderId:{type: Schema.Types.ObjectId, }
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
