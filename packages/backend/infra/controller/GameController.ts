import express from 'express';
import createCharacterAndVoiceActorQuiz from '../../core/usecase/createCharacterAndVoiceActorQuiz';

const router = express.Router();

router.post('/game/quiz/character-va', async (req, res) => {
  req.headers['content-type'] = 'application/json';

  const data = await createCharacterAndVoiceActorQuiz(req.body);

  res.send(data);
});

export default router;