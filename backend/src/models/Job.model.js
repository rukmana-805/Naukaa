import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // BASIC INFO
    title: { type: String, required: true },
    
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // DISPLAY FIELDS
    location: String,

    employmentType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"]
    },

    experienceRequired: {
      min: Number,
      max: Number
    },

    salaryRange: {
      min: Number,
      max: Number
    },

    // SKILLS (IMPORTANT)
    skillsRequired: [String],

    // JOB DETAILS
    description: String,

    responsibilities: [String], // bullet points

    perks: [String],

    // APPLICATION FILTERING
    minQualification: String,

    // MOST IMPORTANT PART
    // CUSTOM QUESTIONS (DYNAMIC FORM)
    questions: [
      {
        question: String,

        type: {
          type: String,
          enum: ["text", "number", "select", "boolean"]
        },

        required: {
          type: Boolean,
          default: false
        },

        options: [String] // for select type
      }
    ],

    // SYSTEM
    applicationsCount: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open"
    },

    expiresAt: Date
  },
  { timestamps: true }
);

jobSchema.pre("findOneAndDelete", async function () {

  const job = await this.model.findOne(this.getFilter());

  await mongoose.model("Application").deleteMany({
    job: job._id
  });

  // next();
});

export default mongoose.model("Job", jobSchema);

// Example questions array for a job posting:
// "questions": [
//   {
//     "question": "Total years of experience?",
//     "type": "number",
//     "required": true
//   },
//   {
//     "question": "Current location?",
//     "type": "text"
//   },
//   {
//     "question": "Are you willing to relocate?",
//     "type": "boolean"
//   },
//   {
//     "question": "Preferred shift?",
//     "type": "select",
//     "options": ["day", "night"]
//   }
// ]

// we have to store answer in application schema too