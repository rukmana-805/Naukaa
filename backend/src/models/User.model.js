import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    // BASIC AUTH
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
    },

    phone: {
      type: String
    },

    role: {
      type: String,
      enum: ["user", "recruiter", "admin"],
      default: "user"
    },

    // PERSONAL DETAILS
    personalDetails: {
      dob: Date,
      gender: {
        type: String,
        enum: ["male", "female", "other"]
      },
      hometown: String,

      address: {
        permanentAddress: String,
        city: String,
        state: String,
        pincode: String
      }
    },

    // PROFESSIONAL STATUS
    professionalStatus: {
      type: String,
      enum: ["fresher", "experienced"]
    },

    experienceDetails: {
      totalExperience: Number, // in years
      currentCompany: String,
      currentSalary: Number,
      expectedSalary: Number,
      noticePeriod: String
    },

    // WORK EXPERIENCE (ARRAY)
    workExperience: [
      {
        companyName: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String
      }
    ],

    // EDUCATION
    education: [
      {
        degree: String,
        institute: String,
        fieldOfStudy: String,
        percentageOrCGPA: String,
        startYear: Number,
        endYear: Number
      }
    ],

    // SKILLS
    skills: [String],

    // CAREER PREFERENCES
    careerPreferences: {
      desiredJobRole: String,
      preferredIndustry: String,
      department: String,
      expectedSalary: Number,

      employmentType: {
        type: String,
        enum: ["full-time", "part-time", "internship", "contract"]
      },

      preferredShift: {
        type: String,
        enum: ["day", "night", "flexible"]
      },

      workMode: {
        type: String,
        enum: ["remote", "hybrid", "onsite"]
      }
    },

    // PREFERRED LOCATIONS
    preferredLocations: [String],

    // LANGUAGES
    languages: [
      {
        name: String,
        read: Boolean,
        write: Boolean,
        speak: Boolean
      }
    ],

    // PROFILE
    profileSummary: String,

    resume: String, // cloudinary URL

    refreshToken: {
      type: String
    },

    profilePic: String
  },
  {
    timestamps: true
  }
);


userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export default mongoose.model("User", userSchema);