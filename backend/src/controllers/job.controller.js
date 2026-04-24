import Job from "../models/Job.model.js";
import Organization from "../models/Organization.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createJob = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    location,
    employmentType,
    salaryRange,
    experienceRequired,
    skillsRequired,
    responsibilities,
    questions,
    expiresAt,
  } = req.body;

  // recruiter only
  if (req.user.role !== "recruiter") {
    throw new ApiError(403, "Only recruiters can post jobs");
  }

  const company = await Organization.findOne({
    members: {
      $elemMatch: {
        user: req.user._id,
        role: { $in: ["owner", "recruiter"] },
      },
    },
  });

  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  const job = await Job.create({
    title,
    description,
    location,
    employmentType,
    salaryRange,
    experienceRequired,
    skillsRequired,
    responsibilities,
    questions,
    company: company._id,
    postedBy: req.user._id,
    expiresAt,
  });

  res.status(201).json(new ApiResponse(201, job, "Job created successfully"));
});

const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) throw new ApiError(404, "Job not found");

  // only owner can update
  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  const allowedFields = [
    "title",
    "description",
    "location",
    "employmentType",
    "salaryRange",
    "experienceRequired",
    "skillsRequired",
    "responsibilities",
    "expiresAt",
    // questions intentionally excluded - make seperate endpoint for that
  ];

  for (const key of Object.keys(req.body)) {
    if (!allowedFields.includes(key)) continue;

    // Nested objects → merge
    if (key === "salaryRange" || key === "experienceRequired") {
      job[key] = {
        ...(job[key] || {}),
        ...(req.body[key] || {}),
      };
    }

    // Simple arrays → replace
    else if (key === "skillsRequired" || key === "responsibilities") {
      if (!Array.isArray(req.body[key])) {
        throw new ApiError(400, `${key} must be an array`);
      }
      job[key] = req.body[key];
    }

    // Simple fields → assign
    else {
      job[key] = req.body[key];
    }
  }

  await job.save();

  res.status(200).json(new ApiResponse(200, job, "Job updated successfully"));
});

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  await job.deleteOne();

  res.status(200).json(new ApiResponse(200, {}, "Job deleted"));
});

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ status: "open" })
    .populate("company", "name logo")
    .sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(200, jobs, "Jobs fetched"));
});

const getJobById = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id).populate("company", "name logo");

    if (!job) {
      throw new ApiError(404, "Job not found");
    }

    res.status(200).json(new ApiResponse(200, job, "Job fetched"));
});






// Questions Controllers
const createQuestion = asyncHandler(async (req, res) => {
  const { jobId } = req.params;
  const { question, type, required, options } = req.body;

  if (
    question.trim() === "" ||
    type.trim() === "" ||
    typeof required === "undefined"
  ) {
    throw new ApiError(400, "Empty fields are not allowed");
  }

  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to create questions");
  }

  job.questions.push({
    question,
    type,
    required,
    options,
  });

  await job.save();

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        job.questions[job.questions.length - 1],
        "Question created successfully",
      ),
    );
});

const updateQuestion = asyncHandler(async (req, res) => {

  const { jobId, questionId } = req.params;
  const { question, type, required, options } = req.body;

  const allowedTypes = ["text", "number", "select", "boolean"];

  if (type && !allowedTypes.includes(type)) {
    throw new ApiError(400, "Invalid question type");
  }

  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  // find subdocument
  const q = job.questions.id(questionId);

  if (!q) {
    throw new ApiError(404, "Question not found");
  }

  // SAFE UPDATE (only provided fields)
  if (question !== undefined) q.question = question;
  if (type !== undefined) q.type = type;
  if (required !== undefined) q.required = required;
  if (options !== undefined) q.options = options;

  await job.save();

  res
    .status(200)
    .json(new ApiResponse(200, q, "Question updated successfully"));
});

const deleteQuestion = asyncHandler(async (req, res) => {

  const { jobId, questionId } = req.params; 

  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  // find subdocument
  const q = job.questions.id(questionId);

  if (!q) {
    throw new ApiError(404, "Question not found");
  }

  // remove subdocument
  job.questions.pull(questionId);

  await job.save();

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Question deleted successfully"));
});

export {
  createJob,
  updateJob,
  deleteJob,
  getJobs,
  getJobById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};
