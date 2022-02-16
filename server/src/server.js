import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import authRouter from './routes/authRoutes.js';
import jobRouter from './routes/jobRoutes.js';

const app = express();

app.use(express.json());

console.log(process.env.PORT);

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
