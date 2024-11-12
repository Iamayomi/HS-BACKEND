// chat-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'chat';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    subject: { type: String,  },
    
    chatroom:{ type: Schema.Types.Mixed,  },
    chatroomId:{ type: Schema.Types.ObjectId,},

    messageType: { type: String}, //mixed,document,image,video,audio,clinicalinfo   
    message:{ type: Schema.Types.Mixed,  },
    messagePriority:{ type: String}, //urgent, normal
    deleted:{type:Boolean, default:false},
    status: { type: String},
    attachmenturl:{ type: String, },

    createdby:{ type: Schema.Types.Mixed,  },
    createdbyId:{ type: Schema.Types.ObjectId,},
    read:[{ type: Schema.Types.ObjectId,}],
    delivered:[{ type: Schema.Types.ObjectId,}],
    geolocation: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: false
      },
      coordinates: {
        type: [Number],
        required: false
      }
    }
    //add geolocation??
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
