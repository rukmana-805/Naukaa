import Application from "../models/Application.model.js";
import Job from "../models/Job.model.js";

const applyToJob = asyncHandler(async (req, res) => {

  const { jobId, answers } = req.body;

  const user = req.user;

  // check job
  const job = await Job.findById(jobId);

  if (!job || job.status !== "open") {
    throw new ApiError(404, "Job not available");
  }

  // duplicate check (extra safety)
  const existing = await Application.findOne({
    applicant: user._id,
    job: jobId
  });

  if (existing) {
    throw new ApiError(400, "Already applied");
  }

  // create application
  const application = await Application.create({
    applicant: user._id,
    job: jobId,
    company: job.company,

    // snapshot
    jobSnapshot: {
      title: job.title,
      location: job.location,
      salaryRange: job.salaryRange
    },

    // resume snapshot
    resume: user.resume,

    answers
  });

  // increment job count
  job.applicationsCount += 1;
  await job.save();

  res.status(201).json(
    new ApiResponse(201, application, "Applied successfully")
  );
});

const getMyApplications = asyncHandler(async (req, res) => {

  const applications = await Application.find({
    applicant: req.user._id
  })
    .populate("job", "title location")
    .sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(200, applications, "Fetched")
  );
});

const getJobApplications = asyncHandler(async (req, res) => {

  const { jobId } = req.params;

  const job = await Job.findById(jobId);

  if (!job) throw new ApiError(404, "Job not found");

  if (job.postedBy.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  const applications = await Application.find({ job: jobId })
    .populate("applicant", "fullName email skills");

  res.status(200).json(
    new ApiResponse(200, applications, "Applications fetched")
  );
});

const updateApplicationStatus = asyncHandler(async (req, res) => {

  const { id } = req.params;
  const { status } = req.body;

  const application = await Application.findById(id).populate("job");

  if (!application) throw new ApiError(404, "Application not found");

  if (
    application.job.postedBy.toString() !== req.user._id.toString()
  ) {
    throw new ApiError(403, "Not authorized");
  }

  application.status = status;

  await application.save();

  res.status(200).json(
    new ApiResponse(200, application, "Status updated")
  );
});

const withdrawApplication = asyncHandler(async (req, res) => {

  const { id } = req.params;

  const application = await Application.findById(id);

  if (!application) throw new ApiError(404, "Application not found");

  if (application.applicant.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized");
  }

  await application.deleteOne();

  res.status(200).json(
    new ApiResponse(200, {}, "Application withdrawn")
  );
});

export {
  applyToJob,
  getMyApplications,
  getJobApplications,
  updateApplicationStatus,
  withdrawApplication
};