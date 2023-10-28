import MediaRepository from '../repository/MediaRepository';

export default async function getMediaVoiceActors(query) {
  const data = await MediaRepository.getMediaById(query);

  const voiceActors = data.Media.characters.edges.map((edge) => {
    return edge.voiceActors[0];
  });

  return voiceActors;
}