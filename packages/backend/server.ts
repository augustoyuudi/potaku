import express from 'express';
import mediaController from './infra/controller/MediaController';
import characterController from './infra/controller/CharacterController';
import gameController from './infra/controller/GameController';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', mediaController);
app.use('/', characterController);
app.use('/', gameController);

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});