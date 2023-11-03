import getRandomizedMediaCharacter from './getRandomizedMediaCharacter';
import getRandomizedVoiceActors from './getRandomizedMediaVoiceActors';

export default async function createCharacterAndVoiceActorQuiz(query) {
  console.log(query);
  const character = await getRandomizedMediaCharacter({
    ...query,
    id: query.mediaId
  });
  const voiceActors = await getRandomizedVoiceActors({
    ...query,
    id: query.mediaId,
    size: 5
  });
  console.log(voiceActors);
  // include character voice actor inside
  // return { character, voice_actors }
}