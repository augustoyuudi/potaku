import MediaRepository from '../repository/MediaRepository';
import getMediaById from './getMediaById';
import type { Query } from '../types/query.types';

async function execute(query: Query) {
  const data = await getMediaById(query, MediaRepository);

  if (!data) {
    throw new Error('Character fetch failed.');
  }

  return data.Media.characters.edges;
}

export default execute;