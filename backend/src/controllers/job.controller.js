import Job from "../models/Job.model.js";
import Organization from "../models/Organization.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createJob = asyncHandler(async (req, res) => {

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
    companyId,
    expiresAt
  } = req.body;

  // recruiter only
  if (req.user.role !== "recruiter") {
    throw new ApiError(403, "Only recruiters can post jobs");
  }

  const company = await Organization.findById(companyId);

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
    company: companyId,
    postedBy: req.user._id,
    expiresAt
  });

  res.status(201).json(
    new ApiResponse(201, job, "Job created successfully")
  );
});

export const updateJob = asyncHandler(async (req, res) => {

  const job = await Job.findById(req.params.id);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  // only owner
  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  Object.assign(job, req.body);

  await job.save();

  res.status(200).json(
    new ApiResponse(200, job, "Job updated")
  );
});

export const deleteJob = asyncHandler(async (req, res) => {

  const job = await Job.findById(req.params.id);

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  await job.deleteOne();

  res.status(200).json(
    new ApiResponse(200, {}, "Job deleted")
  );
});

export const getJobs = asyncHandler(async (req, res) => {

  const jobs = await Job.find({ status: "open" })
    .populate("company", "name logo")
    .sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(200, jobs, "Jobs fetched")
  );
});

