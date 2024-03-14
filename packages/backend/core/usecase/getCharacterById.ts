import CharacterRepository from '../repository/CharacterRepository';
import type { Query } from '../types/query.types';

function execute(query: Query) {
  return CharacterRepository.getCharacterById(query);
}

export default execute;