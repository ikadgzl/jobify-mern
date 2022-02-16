import { Router } from 'express';
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob
} from '../controllers/jobController.js';

const jobRoutes = Router();

jobRoutes.route('/').post(createJob).get(getAllJobs);
jobRoutes.get('/:id').put(updateJob).delete(deleteJob);
jobRoutes.get('/stats', showStats);

export default jobRoutes;
