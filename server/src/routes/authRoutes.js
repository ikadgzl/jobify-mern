import { Router } from 'express';
import { login, register, update } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/update', update);

export default authRouter;
