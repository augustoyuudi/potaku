import express from 'express';
import getPaginatedMediaUC from 'core/usecase/getPaginatedMedia';
import getMediaById from 'core/usecase/getMediaById';
import getRandomizedMediaCharacter from 'core/usecase/getRandomizedMediaCharacter';

const router = express.Router();

router.get('/media/search', async (req, res) => {
  if (!req.body) {
    req.body = {
      page: 1,
      perPage: 5,
      search: 'one piece',
      type: 'ANIME'
    };
  }

  const media = await getPaginatedMediaUC(req.body);

  res.send(media);
});

router.get('/media', async (req, res) => {
  if (!req.body) {
    req.body = {
      id: 21,
      page: 1,
      perPage: 10,
      type: 'ANIME'
    };
  }

  const media = await getMediaById(req.body);

  res.send(media);
});

router.get('/media/character/random', async (req, res) => {
  if (!req.body) {
    req.body = {
      id: 21,
      page: 1,
      perPage: 10,
      sort: ['ROLE'],
      type: 'ANIME'
    };
  }

  const character = await getRandomizedMediaCharacter(req.body);

  res.send(character);
});

export default router;