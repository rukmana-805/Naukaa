import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    // WHO APPLIED
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // WHICH JOB
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },

    // COMPANY (for fast queries)
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },

    // SNAPSHOT
    jobSnapshot: {
      title: String,
      location: String,
      salaryRange: {
        min: Number,
        max: Number
      }
    },

    // RESUME USED AT TIME OF APPLY
    resume: {
      url: String,
      public_id: String
    },

    // ANSWERS (DYNAMIC QUESTIONS 🔥)
    answers: [
      {
        question: String,
        answer: mongoose.Schema.Types.Mixed
      }
    ],

    // STATUS TRACKING
    status: {
      type: String,
      enum: [
        "applied",
        "reviewing",
        "shortlisted",
        "interview",
        "rejected",
        "hired"
      ],
      default: "applied"
    },

    // RECRUITER NOTES
    notes: String,

    // INTERVIEW DETAILS
    interview: {
      scheduledAt: Date,
      mode: String, // online/offline
      meetingLink: String
    },

    // META
    appliedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

applicationSchema.index(
  { job: 1, applicant: 1 }, { unique: true }); // one application per user per job

export default mongoose.model("Application", applicationSchema);