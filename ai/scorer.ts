export function scorePost(text: string): number {
  return Math.min(100, text.length)
}
