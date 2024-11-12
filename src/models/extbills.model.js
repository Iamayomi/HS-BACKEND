// extbills-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'extbills';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    billId:{ type: Schema.Types.ObjectId },
    orderInfo:{
      orderId:{ type: Schema.Types.ObjectId },
      orderObj:{ type: Schema.Types.Mixed },
    },
    serviceInfo:{
      //billingId:{ type: Schema.Types.ObjectId, ref:'billing'},
     // name: { type: String },
     // quantity: { type: Number, required: true },
     // amount:{ type: Number, required: true },
      //-----------------------------------------//
     // costprice: { type:Number },
      price: { type:Number, },
      quantity: { type: Number, },
      productId: { type: Schema.Types.ObjectId, ref:'product'  },
      name: { type: String },
      baseunit: { type: String },
      amount:{ type: Number, required: true },
      billingId:{ type: Schema.Types.ObjectId, ref:'billing'},
      billingContract: { type:Schema.Types.Mixed },
      createdby: { type: Schema.Types.ObjectId },
    },
    paymentInfo:{
      amountDue:{ type:Number, },
      paidup:{ type:Number, default:0}, //total part payment
      balance:{ type:Number, }, //oustanding balance for part payment
      amountpaid:{ type:Number,default:0 }, //amount paid just now
      paymentDetails:[{
        amount:{ type:Number},
        type:{ type: String},
        date:{type: Date},
        subwallet:{ type: Schema.Types.ObjectId, ref:'subwallet'  }
      }]

    },
    participantInfo:{
      billingFacility:{ type: Schema.Types.ObjectId },
      locationId: { type: Schema.Types.ObjectId, ref:'location'  },
      clientId:{ type: Schema.Types.ObjectId },
      client:{ type: Schema.Types.Mixed },
      paymentmode:{ type: Schema.Types.Mixed }
    },
    createdBy:{ type: Schema.Types.ObjectId },
    report_status:{ type: String, default: "Pending", required: true}, //pending, draft, final
    billing_status: { type: String, default: "Unpaid", required: true}, //unpaid,partially paid, fully paid, waived, cancel,suspend
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
