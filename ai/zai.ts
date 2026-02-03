import { scorePost } from "./scorer"

export function runZAI(content: string): number {
  return scorePost(content)
}
