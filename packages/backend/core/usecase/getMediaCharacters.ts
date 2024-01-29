import MediaRepository from '../repository/MediaRepository';
import getMediaById from './getMediaById';

async function execute(query) {
  const data = await getMediaById(query, MediaRepository);

  if (!data) {
    throw new Error('Character fetch failed.');
  }

  return data.Media.characters.edges;
}

export default execute;