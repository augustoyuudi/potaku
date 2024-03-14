import getMediaVoiceActors from './getMediaVoiceActors';
import type { Query } from '../types/query.types';

function fisherYatesShuffle(arr: any[]) {
  const array = [...arr]
  let i: number = array.length || 0
  let j = 0

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

async function execute(query: Query) {
  const voiceActors = await getMediaVoiceActors(query);

  const { size } = query;

  const shuffledResult = fisherYatesShuffle(voiceActors);

  return shuffledResult.slice(0, size);
}

export default execute;