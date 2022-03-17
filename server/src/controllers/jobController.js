import Job from '../models/Job.js';
import StatusCodes from 'http-status-codes';

export const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new Error('Please provide all values');
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

export const getJob = async (req, res) => {};

export const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  if (!company || !position) {
    throw new Error('Please provide all values');
  }
  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new Error('No job found');
  }

  if (req.user.userId !== job.createdBy.toString()) {
    throw new Error('Unauthorized');
  }

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true
  });

  res.status(StatusCodes.OK).json({ updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOne({ _id: jobId });

  if (!job) {
    throw new Error('No job found');
  }

  if (req.user.userId !== job.createdBy.toString()) {
    throw new Error('Unauthorized');
  }

  await job.remove();

  res.status(StatusCodes.OK).json({ msg: 'job removed' });
};

export const showStats = async (req, res) => {};
