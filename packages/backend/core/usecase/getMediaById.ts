import MediaRepository from '../repository/MediaRepository';

function execute(query, mediaRepository = MediaRepository) {
  return mediaRepository.getMediaById(query)
}

export default execute;