import MediaRepository from '../repository/MediaRepository'
import type { Query } from '../types/query.types';

function execute(query: Query) {
  return MediaRepository.getPaginatedMedia(query)
}

export default execute;