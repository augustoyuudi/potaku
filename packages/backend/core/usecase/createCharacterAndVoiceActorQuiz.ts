import getRandomizedMediaCharacter from './getRandomizedMediaCharacter';
import getRandomizedVoiceActors from './getRandomizedMediaVoiceActors';

export default async function createCharacterAndVoiceActorQuiz(query) {
  const character = await getRandomizedMediaCharacter({
    ...query,
    id: query.mediaId
  });

  // remove sub voice actors
  character.voiceActors.splice(1);

  const voiceActors = await getRandomizedVoiceActors({
    ...query,
    id: query.mediaId,
    size: 5
  });

  const duplicatedVoiceActor = voiceActors.find(va => va.id === character.voiceActors[0].id);

  // add VA if not in list, to ensure correct answer is in the list.
  if (!duplicatedVoiceActor) {
    const randomizedIndex = Math.floor(Math.random() * 5);
    voiceActors[randomizedIndex] = character.voiceActors[0];
  }

  return {
    character,
    voiceActors
  }
}