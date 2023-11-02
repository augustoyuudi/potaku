import CharacterRepository from '../repository/CharacterRepository';

export default function getCharacterById(query) {
  return CharacterRepository.getCharacterById(query);
}