import MediaRepository from '../repository/MediaRepository';
import type { Query } from '../types/query.types';

function execute(query: Query, mediaRepository = MediaRepository) {
  return mediaRepository.getMediaById(query)
}

export default execute;