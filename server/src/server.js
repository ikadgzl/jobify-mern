import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobRoutes.js';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000']
  })
);
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ msg: 'wassup' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs/', jobRouter);

app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server is up and runnig on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
