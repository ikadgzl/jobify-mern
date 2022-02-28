import { Router } from 'express';
import { login, register, update } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.put('/update', authMiddleware, update);

export default authRouter;
