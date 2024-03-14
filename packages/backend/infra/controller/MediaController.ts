import express from 'express';
import getPaginatedMedia from '../../core/usecase/getPaginatedMedia';
import getMediaById from '../../core/usecase/getMediaById';
import getRandomizedMediaCharacter from '../../core/usecase/getRandomizedMediaCharacter';
import getRandomizedMediaVoiceActors from '../../core/usecase/getRandomizedMediaVoiceActors';
import getPopularAnimes from '../../core/usecase/getPopularAnimes';

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

  const media = await getPaginatedMedia(req.body);

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

router.get('/media/character/randomized', async (req, res) => {
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

router.get('/media/voice-actors/randomized', async (req, res) => {
  if (!req.body) {
    req.body = {
      id: 21,
      size: 5,
      type: 'ANIME'
    };
  }

  const voiceActors = await getRandomizedMediaVoiceActors(req.body);

  res.send(voiceActors);
});

router.get('/media/popular', async (req, res) => {
  const animes = await getPopularAnimes();

  res.send(animes);
});

export default router;