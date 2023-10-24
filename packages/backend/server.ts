import express from 'express';
import { MediaController } from './infra/controller/MediaController';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const query = {
    search: 'one piece',
    page: 1,
    perPage: 10,
    type: 'ANIME',
  };

  const mediaController = new MediaController();

  const media = await mediaController.getPaginatedMedia({ query }, res);
  console.log(media);
  // res.send('Hello World');
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});