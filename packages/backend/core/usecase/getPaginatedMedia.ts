import MediaRepository from '../repository/MediaRepository';

export default function getPaginatedMedia(query, mediaRepository = MediaRepository) {
  return mediaRepository.getPaginatedMedia(query)
}