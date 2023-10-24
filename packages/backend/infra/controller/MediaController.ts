import MediaRepository from '../../core/repository/MediaRepository';
import gqlClient from '../database/urql';

export class MediaController {
  getPaginatedMedia(req, res) {
    const { query } = req;

    const mediaRepository = new MediaRepository();
    return mediaRepository.getPaginatedMedia(gqlClient, query);
  }
}
