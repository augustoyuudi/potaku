export default interface Media {
  id: number
  title: {
    romaji: string
    native: string
  }
  coverImage: {
    medium: string
    large: string
    extraLarge: string
  }
}