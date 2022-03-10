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

export const getAllJobs = async (req, res) => {};
export const getJob = async (req, res) => {};
export const updateJob = async (req, res) => {};
export const deleteJob = async (req, res) => {};
export const showStats = async (req, res) => {};
