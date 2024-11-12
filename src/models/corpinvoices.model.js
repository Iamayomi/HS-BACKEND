// corpinvoices-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "corpinvoices";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      customerId: { type: Schema.Types.ObjectId }, //sending money
      customer: { type: Schema.Types.Mixed },
      customerName: { type: String },
      customerAddress: { type: String },
      customerCity: { type: String },
      customerCountry: { type: String },
      customerLGA: { type: String },
      customerState: { type: String },
      customerPhone: { type: String },
      customerEmail: { type: String },
      customerType: { type: String },
      customerCategory: { type: String },
      CustomerBranch: { type: String },
      date: { type: Date },
      facilityId: { type: Schema.Types.ObjectId }, //hmo insuing invoice
      faciltyName: { type: String },
      facility: { type: Schema.Types.Mixed },
      invoice_number: { type: String },
      total_amount: { type: Number, required: true },
      payment_mode: { type: String, default: "Cash" },
      payment_option: { type: String },
      subscription_category: { type: String },
      chat: [{ type: Schema.Types.Mixed }],
      plans: [
        {
          name: { type: String }, //name
          type: { type: String }, //indvidual or family
          planId: { type: Schema.Types.ObjectId },
          premium: { type: Number },
          heads: { type: String },
          calendrical: { type: String },
          length: { type: String },
          amount: { type: Number },
          created_at: { type: Date },
          used: { type: Number, default: 0 },
          utilizationStatus: { type: String, default: "Incomplete" }, //complete
          policies: [{ type: Schema.Types.Mixed }],
          createdby: { type: Schema.Types.ObjectId },
          createdByName: { type: String },
          oldPolicies: [{ type: Schema.Types.Mixed }],
        },
      ],
      dealId: { type: Schema.Types.ObjectId, ref: "deal" },
      status: { type: String }, //pending, paid etc
      utilization: { type: String }, //complete;
      balance: { type: Number },
      duedate: { type: String },
      startdate: { type: String },
      enddate: { type: String },
      approved: { type: Boolean, default: false },
      tracker: { type: String }, // "8/10"
      createdby: { type: Schema.Types.ObjectId },
      createdByName: { type: String },
      discount: [
        {
          percent: { type: Number },
          amount: { type: Number },
          createdby: { type: Schema.Types.ObjectId },
          createdDate: { type: Date },
          status: { type: String, default: "Not Approved" },
          approvedby: { type: Schema.Types.ObjectId },
          approvedDate: { type: Date },
        },
      ],
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
