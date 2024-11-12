// tariff-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'tariff';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    organizationId:{ type: Schema.Types.ObjectId }, //writer -NHIS,HMO (NHIS is a plan though)
    organizationName:{ type: String },
      
    providers:  [{
      dest_org:{ type: Schema.Types.ObjectId }, //consumer-facility
      dest_org_name:{ type: String },
      class:[{ type: String }], //primary, secondary, tertiary
    }],
   
    band:{ type: String },
    bandId:{ type: Schema.Types.ObjectId },
    complete:{type:Boolean},
     //category, status, 
    contracts:[{
      source_org:{ type: Schema.Types.ObjectId }, //writer -NHIS,HMO (NHIS is a plan though)
      source_org_name:{ type: String },

      serviceName:{ type: String },
      serviceId:{ type: String },

      price:{ type: Number },
      comments:{ type: String },
      plans:[{
        planName:{type: String},
        planId:{ type: Schema.Types.ObjectId },
        benefit:{type: String},
        benefitId:{ type: Schema.Types.ObjectId },
        benefitcategory:{type: String},
        status:{ type: String },
        feeForService:{type:Boolean, default:true},
        capitation:{type:Boolean, default:false},
        coPay:{type:Boolean, default:false},
        copayDetail:{ type: String }, //%
        reqPA:{ type: String }, 
        covered:{type:Boolean, default:true},
       // comments:{ type: String },
        band:{ type: String },
        bandId:{ type: Schema.Types.ObjectId },
       }],

      billing_type:{ type: String },
       
    
      modifier:[{
        tag:{ type: String }, 
        price:{type: Number}, 
        variation:{type: String},
        details:{type:Schema.Types.Mixed}
        }]
      }],

    

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
