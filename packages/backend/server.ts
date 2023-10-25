import express from 'express';
import mediaController from './infra/controller/MediaController';

const app = express();
const port = 3000;

app.use('/', mediaController);

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});