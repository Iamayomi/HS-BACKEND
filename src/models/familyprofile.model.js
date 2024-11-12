// familyprofile-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'familyprofile';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facilityId:{ type: Schema.Types.ObjectId},
     maleClient:{
      name: { type: String },
      age: { type: Number },
      gender: { type: String },
      allergies: { type: String },
      coMorbidities: { type: String },
      disabilities: { type: String },
      specificdetails: { type: String },
      occupation: { type: String }
    }, //{ type: Schema.Types.ObjectId},
  femaleClient: {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    allergies: { type: String },
    coMorbidities: { type: String },
    disabilities: { type: String },
    specificdetails: { type: String },
    occupation: { type: String }
  },// { type: Schema.Types.ObjectId},
  
  name: { type: String },
  yearTtc: { type: String }, //years trying to conceive
  email: { type: String },
  contactPhoneNumber:{ type: String },
  practitioner:{ type: String },
  marriedHowLong: { type: Number },
  file_number:{ type: String },
  careteam:[{
    id:{ type: Schema.Types.ObjectId},
    status:{ type: String },
    dateassigned:{ type: Date }
  }],
  paymentinfo:[
    {
      paymentmode:{ type: String,  default:"Cash"},
      organizationId:{ type: Schema.Types.ObjectId },
      organizationName:{ type: String,  },
      principalId:{ type: String,  },
      clientId:{ type: String,  },
      principalName:{ type: String,  },
      plan:{ type: String,  },
      planType:{ type: String,  },
      active:{ type: Boolean,default:true},
      principal:{ type: String},
      organizationType: { type: String,  },
      agent:{ type: Schema.Types.ObjectId },
      agentName:{ type: String,  },
      policy: { type: Schema.Types.Mixed,  },

    }
  ],
  createdby:{ type: Schema.Types.ObjectId}
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
