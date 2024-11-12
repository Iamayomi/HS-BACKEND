// premiums-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "premiums";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      invoiceInfo: {
        invoiceId: { type: Schema.Types.ObjectId },
        invoiceObj: { type: Schema.Types.Mixed },
      },
      serviceInfo: {
        plansRef: [{ type: Schema.Types.Mixed }],

        policyref: [
          {
            policyId: { type: Schema.Types.ObjectId },
            policyObj: { type: Schema.Types.Mixed },
          },
        ],
        quantity: { type: Number },
        amount: { type: Number, required: true },
        createdby: { type: Schema.Types.ObjectId },
        duedate: { type: String },
        createdByName: { type: String },
      },

      paymentInfo: {
        amountDue: { type: Number },
        paidup: { type: Number, default: 0 }, //total part payment
        balance: { type: Number }, //oustanding balance for part payment
        amountpaid: { type: Number, default: 0 }, //amount paid just now
        paymentDetails: [
          {
            amount: { type: Number },
            type: { type: String },
            date: { type: Date },
            subwallet: { type: Schema.Types.ObjectId, ref: "subwallet" },
          },
        ],
      },
      participantInfo: {
        billingFacilityId: { type: Schema.Types.ObjectId }, //hmo
        billingFacility: { type: Schema.Types.Mixed },
        locationId: { type: Schema.Types.ObjectId, ref: "location" },
        clientId: { type: Schema.Types.ObjectId },
        client: { type: Schema.Types.Mixed },
        clientType: { type: String }, //indv or corporate
        paymentmode: { type: Schema.Types.Mixed },
      },
      createdBy: { type: Schema.Types.ObjectId },
      createdByName: { type: String },
      billing_status: { type: String, default: "Unpaid", required: true }, //unpaid,partially paid, fully paid, waived, cancel,suspend
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
