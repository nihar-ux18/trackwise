export type UserRole = "student" | "mentor" | "industry"

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  organization: string
  avatarInitials: string
  internshipTitle?: string
}

export const users: User[] = [
  { id: "student-001", name: "Aarav Mehta", email: "aarav.mehta@example.com", role: "student", organization: "GH Raisoni College", avatarInitials: "AM", internshipTitle: "Product Design Intern" },
  { id: "student-002", name: "Isha Kulkarni", email: "isha.kulkarni@example.com", role: "student", organization: "GH Raisoni College", avatarInitials: "IK", internshipTitle: "Frontend Engineering Intern" },
  { id: "mentor-001", name: "Dr. Neha Sharma", email: "neha.sharma@ghrce.edu.in", role: "mentor", organization: "GH Raisoni College", avatarInitials: "NS" },
  { id: "industry-001", name: "Rohan Deshmukh", email: "rohan@northstar.tech", role: "industry", organization: "Northstar Technologies", avatarInitials: "RD" },
]
