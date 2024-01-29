import getMediaCharacters from './getMediaCharacters';

async function execute(query) {
  const characters = await getMediaCharacters(query);
  const characterIndex = Math.floor(Math.random() * query.perPage); // random number between range

  return characters[characterIndex];
}

export default execute;