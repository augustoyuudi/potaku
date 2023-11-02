import express from 'express';
import getCharacterById from '../../core/usecase/getCharacterById';
import validateCharacterByVoiceActor from '../../core/usecase/validateCharacterByVoiceActor';

const router = express.Router();

router.post('/character/search', async (req, res) => {
  if (!req.body) {
    req.body = {
      id: 40,
      onList: false,
      page: 1,
      sort: 'POPULARITY_DESC'
    };
  }

  const character = await getCharacterById(req.body);

  res.send(character);
});

router.post('/character/validate/voice-actor', async (req, res) => {
  if (!req.body) {
    req.body = {
      characterId: 40,
      voiceActorId: 95075,
    }
  }

  const isValid = await validateCharacterByVoiceActor(req.body);

  res.send(isValid);
});

export default router;