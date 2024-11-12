// wallettransaction-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'wallettransaction';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    toWallet:{ type: Schema.Types.ObjectId, ref:'facility', }, //receiving money
    fromWallet:{ type: Schema.Types.ObjectId, ref:'facility', },//sending money
    amount:{ type: Number , required:true},
    description: { type: String },
    toName:{ type: String },
    fromName:{ type: String },
    createdby: { type: Schema.Types.ObjectId},
    refBill:[{ type: Schema.Types.ObjectId, ref:'bills'  }], //billid to be paid : ref invoice to pay
    info:{ type: Schema.Types.Mixed},
    paymentmode:{ type: String },
    category:{ type: String }, //debit/credit

    
    facility: { type: Schema.Types.ObjectId, ref:'facility', },
    locationId: { type: Schema.Types.ObjectId, ref:'location'  },
    type: { type: String, required: true, default:"Payment" }
   
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
