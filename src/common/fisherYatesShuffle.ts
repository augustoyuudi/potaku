export default function fisherYatesShuffle(arr: number[]) {
  let array = [...arr]
  let i: number = array.length || 0
  let j = 0

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}