import Router from 'express';
import { 
    createJob, updateJob, deleteJob, getJobs, getJobById,
    createQuestion,
    updateQuestion,
    deleteQuestion
} from '../controllers/job.controller.js';

import verifyUser from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/create-job', verifyUser, createJob);
router.get('/get-open-jobs', verifyUser, getJobs);
router.get('/get-job/:id', verifyUser, getJobById);
router.patch('/update-job/:id', verifyUser, updateJob);
router.delete('/delete-job/:id', verifyUser, deleteJob);


// Question update routes
router.post('/create-question/:jobId', verifyUser, createQuestion);
router.patch('/update-question/:jobId/:questionId', verifyUser, updateQuestion);
router.delete('/delete-question/:jobId/:questionId', verifyUser, deleteQuestion);

export default router;