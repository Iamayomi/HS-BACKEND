// admission-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'admission';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
   
    encounter_id:{type: Schema.Types.ObjectId,},
    hospitalization_id:{type: Schema.Types.ObjectId,},
    //order
    order:{type:Schema.Types.Mixed},
    order_id:{type: Schema.Types.ObjectId,},

    //location: ward/bed
   
      ward_name:{type: String},
      ward_id:{type: Schema.Types.ObjectId,},
      bed:{type: String},
      bed_id:{type: Schema.Types.ObjectId,},
    facility:{type: Schema.Types.ObjectId,},
    //billing:perpertuity
    bill:{type:Schema.Types.Mixed},
    bill_id:{type: Schema.Types.ObjectId,},
    //status
    status:{type: String}, //occupied //unoccupied
    admissionhx:[
        {type: String} //transfer history
        ],
    //client
    client:{type:Schema.Types.Mixed},
    client_id:{type: Schema.Types.ObjectId,},
    clientpolicy:[{type:Schema.Types.Mixed}],
    //careteam
    careteam:[
      {
        team:{type: String}
      }
    ],
    start_time: { type: Date,  },
    end_time: { type: Date,  }, //
    createdby:{type: Schema.Types.ObjectId,},
    
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
