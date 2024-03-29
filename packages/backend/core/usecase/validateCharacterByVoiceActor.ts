import getCharacterById from './getCharacterById';

async function execute({ voiceActorId, characterId }: {voiceActorId: string | number, characterId: string | number}) {
  const { Character } = await getCharacterById({
    id: characterId,
    onList: false,
    page: 1,
    sort: 'POPULARITY_DESC'
  });

  const correctVoiceActor = Character.media.edges[0].voiceActors[0].id;

  if (voiceActorId === correctVoiceActor) {
    return true;
  }

  return false;
}

export default execute;