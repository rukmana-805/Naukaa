import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    website: String,

    logo: {
      url: String,
      public_id: String
    },

    industry: String,
    companySize: String,

    location: {
      city: String,
      state: String,
      country: String
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Organization", organizationSchema);