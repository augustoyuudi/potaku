import MediaRepository from '../repository/MediaRepository';

export default function getMediaById(query, mediaRepository = MediaRepository) {
  return mediaRepository.getMediaById(query)
}