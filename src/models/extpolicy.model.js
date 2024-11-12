// extpolicy-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'extpolicy';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    policyNo:{ type: String},
    organizationType: { type: String,  },// need to check that it is a local policy ior a state policy //hmo
    organizationId:{ type: Schema.Types.ObjectId }, // hmo
    organizationName:{ type: String,  },
    organization:{ type: Schema.Types.Mixed},

    principal:{ type: Schema.Types.Mixed,},
    dependantBeneficiaries: [{ type: Schema.Types.Mixed,  }],
    numBeneficiaries:{ type: Number,  },

    beneficiaries:[{ type: Schema.Types.Mixed,  }], //embed "type" to delinate principal from dependents 

    sponsor: { type: Schema.Types.Mixed, required: false },
    sponsorshipType: { type: String },
    planType: { type: String },
    plan:{ type: Schema.Types.Mixed, required: false},
    premiumContract: { type: Schema.Types.Mixed,  },
    premium: { type: String },
    active:{ type: Boolean,default:false},
    isPaid: { type: Schema.Types.Boolean, default: false },
    approved:{ type: Boolean,default:false},
    approvalDate:{type:Date},
    approvedby:{
      employeename:{ type: String},
      employeeId:{ type: Schema.Types.ObjectId, ref:'employee'  },
    },
    paymentmode:{ type: String,  default:"Cash"}, //HMO

    agent:{ type: Schema.Types.Mixed, required: false },
    agentName:{ type: String,  },

    bill: { type: Schema.Types.Mixed,  },
    billId: { type: Schema.Types.ObjectId,},

    validityPeriods:[ { type: String,  }],
    validitystarts:{ type: Schema.Types.Date,},
    validityEnds:{ type: Schema.Types.Date,},
   providers:[{ type: Schema.Types.Mixed, required: false }],
   status:{ type: String,  },
   statushx:[{
    date:{type:Date},
    employeename:{ type: String},
    employeeId:{ type: Schema.Types.ObjectId, ref:'employee'  },
    status:{ type: String},
   }],
   invoice:{ type:Schema.Types.ObjectId},

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
