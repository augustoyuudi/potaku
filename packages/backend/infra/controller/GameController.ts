import express from 'express';
import createCharacterAndVoiceActorQuiz from '../../core/usecase/createCharacterAndVoiceActorQuiz';

const router = express.Router();

router.get('/game/quiz/character-va', async (req, res) => {
  if (!req.body) {
    req.body = {
      mediaId: 21,
      sort: ['ROLE'],
      page: 1,
      perPage: 10
    };
  }

  const data = await createCharacterAndVoiceActorQuiz(req.body);

  res.send(data);
});

export default router;