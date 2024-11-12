// deal-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "deal";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      facilityname: { type: String },
      facilityId: { type: Schema.Types.ObjectId },
      facility: { type: Schema.Types.Mixed },
      type: { type: String }, //invidual or corporate
      name: { type: String },
      phone: { type: String },
      email: { type: String, lowercase: true },
      address: { type: String },
      city: { type: String },
      lga: { type: String },
      state: { type: String },
      country: { type: String },
      orgbranch: { type: String },
      clientclass: { type: String },

      //organizationdetail:{},
      dealinfo: {
        probability: { type: String },
        size: { type: Number },
        currStatus: { type: String },
        nextAction: { type: String },
        weightForecast: { type: String },
        closingDate: { type: Date },
      },

      opportunityScore: {
        total: { type: Number, default: 0 },
        answer: { type: Schema.Types.Mixed },
        assessment: { type: String },
        date: { type: Date },
        employeename: { type: String },
      },
      additionalInfo: [
        {
          date: { type: Date },
          employeename: { type: String },
          info: { type: String },
        },
      ],
      statushx: [
        {
          date: { type: Date },
          employeename: { type: String },
          employeeId: { type: Schema.Types.ObjectId, ref: "employee" },
          status: { type: String },
        },
      ],
      contacts: [
        {
          name: { type: String },
          email: { type: String },
          position: { type: String },
          profession: { type: String },
          phoneno: { type: String },
          active: { type: Boolean },
        },
      ],
      assignStaff: [
        {
          name: { type: String },
          email: { type: String },
          position: { type: String },
          phoneno: { type: String },
          active: { type: Boolean },
          profession: { type: String },
          employeeId: { type: Schema.Types.ObjectId, ref: "employee" },
        },
      ],
      closed: { type: Boolean, default: false },
      closedDate: { type: Date },
      onboardinglink: [{ type: String }],
      tasks: [{ type: Schema.Types.Mixed }],
      appointments: [{ type: Schema.Types.Mixed }],
      uploads: [{ type: Schema.Types.Mixed }],

      proposal: [{ type: Schema.Types.Mixed }],
      invoices: [{ type: Schema.Types.Mixed }],
      sla: [{ type: Schema.Types.Mixed }],
      chat: [{ type: Schema.Types.Mixed }],

      createdbyName: { type: String },
      createdby: { type: Schema.Types.ObjectId, ref: "employee" },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
