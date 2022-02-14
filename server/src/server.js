import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';

const app = express();

app.get('/', (req, res) => {
  res.send('hi');
});

app.use(errorHandler);
app.use(notFound);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is up and runnig on port: ${PORT}`);
});
