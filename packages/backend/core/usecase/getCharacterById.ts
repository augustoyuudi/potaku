import CharacterRepository from '../repository/CharacterRepository';

export default async function getCharacterById(query) {
  const character = await CharacterRepository.getCharacterById(query);

  return character;
}