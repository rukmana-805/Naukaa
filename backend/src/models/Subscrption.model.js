import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    plan: {
      type: String,
      enum: ["free", "premium"],
      default: "free"
    },

    startDate: Date,
    endDate: Date,

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"]
    }
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", subscriptionSchema);