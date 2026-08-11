export type MilestoneStatus = "pending" | "approved" | "rejected"

export type Milestone = {
  id: string
  title: string
  description: string
  status: MilestoneStatus
  date: string
  studentId: string
}

export const milestones: Milestone[] = [
  { id: "milestone-001", title: "Onboarding & project brief", description: "Reviewed the product brief and aligned on the internship deliverables.", status: "approved", date: "2026-06-12", studentId: "student-001" },
  { id: "milestone-002", title: "Research summary", description: "Submitted a summary of user interviews and competitive research.", status: "approved", date: "2026-06-26", studentId: "student-001" },
  { id: "milestone-003", title: "Prototype review", description: "Shared the first working prototype for mentor and industry feedback.", status: "pending", date: "2026-07-18", studentId: "student-001" },
  { id: "milestone-004", title: "Final presentation", description: "Present the completed internship project and learnings.", status: "pending", date: "2026-08-08", studentId: "student-001" },
  { id: "milestone-005", title: "Weekly progress log", description: "Add the missing evidence link for this submission.", status: "rejected", date: "2026-07-04", studentId: "student-002" },
]
