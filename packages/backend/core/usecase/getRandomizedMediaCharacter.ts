import getMediaCharacters from './getMediaCharacters';


export default async function getRandomizedMediaCharacter(query) {
  const characters = await getMediaCharacters(query);
  const characterIndex = Math.floor(Math.random() * query.perPage); // random number between range

  return characters[characterIndex];
}