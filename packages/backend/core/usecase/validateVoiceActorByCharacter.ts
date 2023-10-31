import getCharacterById from './getCharacterById';

export default async function validateVoiceActor(voiceActorId, characterId) {
  const character = await getCharacterById(characterId);
  const correctVoiceActor = character.Media.edges.voiceActors[0];

  if (voiceActorId === correctVoiceActor.id) {
    console.log('Equal');
    return;
  }

  console.log(`Not equal. Expected: ${correctVoiceActor.id}. Received: ${voiceActorId}`);
}