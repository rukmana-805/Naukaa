import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job"
    },

    resume: {
      url: String,
      public_id: String
    },

    status: {
      type: String,
      enum: ["applied", "shortlisted", "rejected", "hired"],
      default: "applied"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);