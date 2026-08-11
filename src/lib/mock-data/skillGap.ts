export type SkillGap = {
  score: number
  summary: string
  suggestions: string[]
  studentId: string
}

export const skillGap: SkillGap = {
  score: 78,
  summary: "You are building a strong foundation for product design roles through consistent, verified project work. A little more practice with presenting decisions and explaining trade-offs will improve your readiness.",
  suggestions: ["Document the trade-offs behind your prototype decisions.", "Practice a five-minute walkthrough of your project outcome."],
  studentId: "student-001",
}
