// inventory-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'inventory';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facility: { type: Schema.Types.ObjectId, ref:'facility', required:true },
    //userId: { type: Schema.Types.ObjectId, ref:'users'  },
    storeId: { type: Schema.Types.ObjectId, ref:'location'  },
    productId: { type: Schema.Types.ObjectId, ref:'product'  },
    billingId:{ type: Schema.Types.ObjectId, /* ref:'billing' */},
    name: { type: String },
    //baseunit: { type: String },
    quantity: { type: Number, required: true },
    reorder_level: { type: Number },
    baseunit: { type: String },
    costprice: { type:Number },
    sellingprice: { type: Number},
    stockvalue:{ type: Number},
    category:{ type:String},
    SKU:{ type:String},
    batches:[{ batchNo:{ type:String,},   
               quantity:{ type:String, }, 
               expirydate:{ type:String,}
              }]
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
