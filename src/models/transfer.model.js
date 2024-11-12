// transfer-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'transfer';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    org_facilityId: { type: Schema.Types.ObjectId, ref:'facility', required:true }, //orginatinating
    org_storeId: { type: Schema.Types.ObjectId, ref:'location'  },  //originating
    dest_facilityId: { type: Schema.Types.ObjectId, ref:'facility', required:true }, //Destination
    dest_storeId: { type: Schema.Types.ObjectId, ref:'location'  }, //Destination
    type: { type: String, required: true }, //requisition, transfer
    documentNo: { type: String },
    org_date: { type: Date },
    rev_date: { type: Date },
    org_facility_name: { type: String },
    dest_facility_name: { type: String },
    org_store_name: { type: String },
    dest_store_name: { type: String },
    org_totalamount: { type:Number, required: true },
    dest_totalamount: { type:Number, required: true, default:0 },
    createdby: { type: Schema.Types.ObjectId},
    createdbyName: { type:String},
    processedby: { type: Schema.Types.ObjectId},
    processedbyName: { type:String},
   // transactioncategory: { type: String, required: true }, //credit=entry , debit=exit
    dest_status:{ type: String }, //Accepted, Partly-fulfilled, Pending, Rejected
    org_status:{ type: String }, //Fulfiled, Partly-fulfilled, Pending, Rejected
    org_trx_status:{ type: String }, //Draft,Approved,Sent
    dest_trx_status:{ type: String }, //Received,Accepted Partly, Accepted Fully
    productitems:[{
      costprice: { type:Number },
      sellingprice: { type:Number, },
      quantityRecv: { type: Number,default:0, required: true },
      quantitySent: { type: Number, required: true },
      productId: { type: Schema.Types.ObjectId, ref:'product'  },
      name: { type: String },
      baseunit: { type: String },
      amount:{ type: Number, required: true },
     billingId:{ type: Schema.Types.ObjectId, ref:'billing'},
      createdby: { type: Schema.Types.ObjectId },
      dest_status:{ type: String }, //Accepted, Partly-accepted, Pending, Rejected
      org_status:{ type: String }, //Fulfiled, Partly-fulfilled, Pending, Rejected
      comments:{type: String}, 
      item:{ type:Schema.Types.Mixed },

    }],
    action_hx:[
      {actorname:{type: String} , 
      actorId:{type: Schema.Types.ObjectId} , 
      action:{type: String}, 
      description:{type: String}, 
      comments:{type: String}, 
      createdat:{type:Date , default:Date.now},  
    }
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
