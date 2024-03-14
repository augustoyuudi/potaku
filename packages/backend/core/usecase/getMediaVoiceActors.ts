import MediaRepository from '../repository/MediaRepository';
import type { Query } from '../types/query.types';

type Edge = {
  voiceActors: { [key: string]: string }[]
}

async function execute(query: Query) {
  const data = await MediaRepository.getMediaById(query);

  const voiceActors = data.Media.characters.edges.map((edge: Edge) => {
    return edge.voiceActors[0];
  });

  return voiceActors;
}

export default execute;