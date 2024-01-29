import MediaRepository from 'core/repository/MediaRepository'

function execute(query) {
  return MediaRepository.getPaginatedMedia(query)
}

export default execute;