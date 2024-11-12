// healthplan-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "healthplan";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      organizationId: { type: Schema.Types.ObjectId }, //writer -NHIS,HMO (NHIS is a plan though)
      organizationName: { type: String },
      planName: { type: String },
      premiums: [{ type: Schema.Types.Mixed }], //type,durationNO, durationCalender [weeks,months, year],amount,
      planCategory: { type: String },
      familyLimit: { type: String },
      individualLimit: { type: String },
      providerNetwork: [{ type: String }],
      coverageArea: [{ type: String }],
      band: [{ type: String }],
      benefits: [{ type: Schema.Types.Mixed }], //category, status,
      contracts: [
        {
          serviceName: { type: String },
          serviceId: { type: String },
          source_org: { type: Schema.Types.ObjectId }, //writer -NHIS,HMO (NHIS is a plan though)
          source_org_name: { type: String },
          billing_type: { type: String },
          dest_org: { type: Schema.Types.ObjectId }, //consumer-facility
          dest_org_name: { type: String },
          band: [{ type: String }],
          price: { type: Number },
          plans: [{ type: Schema.Types.Mixed }],
          frequency: { type: String },
          duration: { type: String },
          timeframe: { type: String },
          status: { type: String },
          capitation: { type: Boolean, default: false },
          comments: { type: String },
          modifier: [
            {
              tag: { type: String },
              price: { type: Number },
              variation: { type: String },
              details: { type: Schema.Types.Mixed },
            },
          ],
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
