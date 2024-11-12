// employee-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'employee';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String, unique: true, lowercase: true },
    profession: { type: String },
    position: { type: String },
    facility: { type: Schema.Types.ObjectId, ref:'facility', required:true },
    userId: { type: Schema.Types.ObjectId, ref:'users'  },
    departmentId: { type: Schema.Types.ObjectId, ref:'department'  },
    deptunitId: { type: Schema.Types.ObjectId, ref:'dept-unit'  },
    department: { type: String },
    deptunit: { type: String },
    roles:[{ type: String }],
    imageurl:{ type: String },
    signatureUrl:{ type: String },
    locations:[{type:Schema.Types.Mixed}],
    accesslevel:{ type: String, default:"1" },
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
