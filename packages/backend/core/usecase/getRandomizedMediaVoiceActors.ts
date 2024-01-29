import { fisherYatesShuffle } from 'foundation'
import getMediaVoiceActors from './getMediaVoiceActors';

async function execute(query) {
  const voiceActors = await getMediaVoiceActors(query);

  const { size } = query;

  const shuffledResult = fisherYatesShuffle(voiceActors);

  return shuffledResult.slice(0, size);
}

export default execute;