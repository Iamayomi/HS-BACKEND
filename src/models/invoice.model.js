// invoice-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'invoice';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    
    clientId:{ type: Schema.Types.ObjectId, ref:'client', },//sending money
    client:{ type: Schema.Types.Mixed},
    clientName:{ type: String },
    facilityId:{ type: Schema.Types.ObjectId, ref:'facility', },
    invoiceNo:{ type: String },
    totalamount:{ type: Number , required:true},
    createdby: { type: Schema.Types.ObjectId},
    status:{ type: String }, //billid to be paid : ref invoice to pay
    bills:[{ type: Schema.Types.Mixed}],
    balance:{ type: Number},
    sponsorId:{ type: Schema.Types.ObjectId, ref:'facility', }, //organization paying; hmo 
    sponsor:{ type: Schema.Types.Mixed},
    policy:{ type: Schema.Types.Mixed},
    sponsorType:{ type: String },
    paymentmode:{ type: String, default:"Cash" },
    paylocationName:{ type: String },
    paylocationId:{ type: Schema.Types.ObjectId},
    payBranch:{ type: String },
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
