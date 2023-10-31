import express from 'express';
import getCharacterById from '../../core/usecase/getCharacterById';

const router = express.Router();

router.post('/character/search', async (req, res) => {
  if (!req.body) {
    req.body = {
      id: 40
    };
  }

  const character = await getCharacterById(req.body);

  res.send(character);
});

export default router;