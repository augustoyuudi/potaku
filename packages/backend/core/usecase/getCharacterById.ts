import CharacterRepository from '../repository/CharacterRepository';

function execute(query) {
  return CharacterRepository.getCharacterById(query);
}

export default execute;