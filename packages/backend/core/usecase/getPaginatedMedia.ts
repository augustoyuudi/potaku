import MediaRepository from 'core/repository/MediaRepository'

export default function getPaginatedMedia(query) {
  return MediaRepository.getPaginatedMedia(query)
}