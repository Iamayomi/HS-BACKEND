// facility-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'facility';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facilityName: { type: String, required: true },
    facilityAddress: { type: String },
    facilityCity: { type: String },
    facilityState: { type: String },
    facilityLGA: { type: String },
    facilityCountry: { type: String },
    facilityContactPhone: { type: String},
    facilityEmail: { type: String},
    facilityOwner: { type: String  },
    facilityType: { type: String  },
    facilityCategory: { type: String  },
    facilityModules:[{ type: String  }],
    facilityCAC:{ type: String  },
    facilitylogo:{ type: String  },
    facilityBankAcct:[{ type:Schema.Types.Mixed}],
    createdby: { type: Schema.Types.ObjectId, ref:'users'  },
    active:{type:Boolean, default:true},
    facilityCreated:{ type: String  },
    dealInfo:[{
      deal:{ type:Schema.Types.Mixed},
      dealId:{ type: Schema.Types.ObjectId,  },
    }],
    accessMode:{ type: String, default:"Free"  },
    accessValue:{ type: Number  },
    accessDuration:{ type: String  },
    accessStartDate:{ type: String, default:Date.now  },
    accessComments:{ type: String  },
    walletBalance:{ type: Number  },

    billingMode:{type:String, default:"Billing"},
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
