export type AttendanceStatus = "present" | "late" | "absent"

export type AttendanceRecord = {
  id: string
  date: string
  status: AttendanceStatus
  studentId: string
}

export const attendance: AttendanceRecord[] = [
  { id: "attendance-001", date: "2026-07-20", status: "present", studentId: "student-001" },
  { id: "attendance-002", date: "2026-07-21", status: "present", studentId: "student-001" },
  { id: "attendance-003", date: "2026-07-22", status: "late", studentId: "student-001" },
  { id: "attendance-004", date: "2026-07-23", status: "present", studentId: "student-001" },
  { id: "attendance-005", date: "2026-07-24", status: "present", studentId: "student-001" },
  { id: "attendance-006", date: "2026-07-27", status: "present", studentId: "student-001" },
  { id: "attendance-007", date: "2026-07-28", status: "present", studentId: "student-001" },
  { id: "attendance-008", date: "2026-07-29", status: "absent", studentId: "student-001" },
  { id: "attendance-009", date: "2026-07-30", status: "present", studentId: "student-001" },
  { id: "attendance-010", date: "2026-07-31", status: "present", studentId: "student-001" },
]
