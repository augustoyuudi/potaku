import express from 'express';
import getPaginatedMediaUC from 'core/usecase/getPaginatedMedia';

const router = express.Router();

router.get('/media', async (req, res) => {
  req.body = {
    page: 1,
    perPage: 5,
    search: 'one piece',
    type: 'ANIME'
  };

  const media = await getPaginatedMediaUC(req.body);

  res.send(media);
});

export default router;