import express from 'express';

const app = express();

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is up and runnig on port: ${PORT}`);
});
