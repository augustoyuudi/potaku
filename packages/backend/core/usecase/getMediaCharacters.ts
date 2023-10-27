import MediaRepository from '../repository/MediaRepository';
import getMediaById from './getMediaById';

export default async function getMediaCharacter(query) {
  const data = await getMediaById(query, MediaRepository);

  if (!data) {
    throw new Error('Character fetch failed.');
  }

  return data.Media.characters.edges;
}