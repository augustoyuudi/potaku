import getMediaCharacters from './getMediaCharacters';
import type { Query } from '../types/query.types';

async function execute(query: Query) {
  const characters = await getMediaCharacters(query);
  const characterIndex = Math.floor(Math.random() * (query.perPage || 1)); // random number between range

  return characters[characterIndex];
}

export default execute;