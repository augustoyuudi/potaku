import type VoiceActor from './VoiceActor';

export default interface Character {
  node: {
    image: {
      large: string
    }
    name: {
      full: string
    }
  }
  voiceActors: VoiceActor[]
}