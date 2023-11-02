import getCharacterById from './getCharacterById';

export default async function validateCharacterByVoiceActor({ voiceActorId, characterId }: {voiceActorId: string | number, characterId: string | number}) {
  const { Character } = await getCharacterById({
    id: characterId,
    onList: false,
    page: 1,
    sort: 'POPULARITY_DESC'
  });
  const correctVoiceActor = Character.media.edges[0].voiceActors[0].id;

  if (voiceActorId === correctVoiceActor) {
    console.log('Equal');
    return true;
  }

  console.log(`Not equal. Expected: ${correctVoiceActor}. Received: ${voiceActorId}`);

  return false;
}