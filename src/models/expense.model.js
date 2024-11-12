// expense-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'expense';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    facility: { type: Schema.Types.ObjectId,  },
   source: { type: String },
   expenseAccount_id:{ type: Schema.Types.ObjectId,  },
   expenseAccount_name: { type: String },
    description: { type: String },
    payee: { type: String },
    payee_id:{ type: Schema.Types.ObjectId,  },
    amount: { type: String },
    currency: { type: String , default:"Naira"},
    createdby: { type: String },
    authorisedby_name: { type: String },
    authorisedby_id:{ type: Schema.Types.ObjectId,  },
    userid:{ type: Schema.Types.ObjectId,  },
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
