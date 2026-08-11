import { CalendarCheck2, ChevronLeft, Mail } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ApprovalButtons } from "@/components/shared/ApprovalButtons"
import { ChartWrapper, type TrendPoint } from "@/components/shared/ChartWrapper"
import { MilestoneCard } from "@/components/shared/MilestoneCard"
import { Sidebar } from "@/components/shared/Sidebar"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { Topbar } from "@/components/shared/Topbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { attendance, milestones, users } from "@/lib/mock-data"

type MentorReviewPageProps = { params: Promise<{ studentId: string }> }

export default async function MentorReviewPage({ params }: MentorReviewPageProps) {
  const { studentId } = await params
  const student = users.find((user) => user.id === studentId && user.role === "student")
  if (!student) notFound()

  const studentMilestones = milestones.filter((milestone) => milestone.studentId === student.id)
  const studentAttendance = attendance.filter((record) => record.studentId === student.id)
  const trend: TrendPoint[] = studentAttendance.map((record) => ({ label: new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(record.date)), score: record.status === "present" ? 100 : record.status === "late" ? 75 : 0 }))

  return <div className="min-h-screen bg-canvas"><Sidebar role="mentor" /><div className="md:pl-[240px]"><Topbar user={users.find((user) => user.role === "mentor")!} /><main className="mx-auto max-w-[1200px] space-y-8 px-5 py-8 md:px-8"><Link href="/mentor/dashboard" className="inline-flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-primary"><ChevronLeft className="size-4" />Back to mentor dashboard</Link><section className="flex flex-col justify-between gap-5 rounded-lg border border-border bg-surface-1 p-6 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">{student.avatarInitials}</div><div><div className="flex flex-wrap items-center gap-2"><h1 className="text-[22px] font-semibold tracking-[-0.2px] text-ink">{student.name}</h1><StatusBadge status="review" /></div><p className="mt-1 text-sm text-ink-muted">{student.internshipTitle ?? "Internship student"}</p><p className="mt-2 flex items-center gap-1.5 text-[13px] text-ink-subtle"><Mail className="size-3.5" />{student.email}</p></div></div><div className="grid grid-cols-2 gap-6 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><div><p className="text-[12px] uppercase tracking-[0.2px] text-ink-subtle">Milestones</p><p className="mt-1 text-xl font-bold text-ink">{studentMilestones.length}</p></div><div><p className="text-[12px] uppercase tracking-[0.2px] text-ink-subtle">Attendance</p><p className="mt-1 text-xl font-bold text-ink">{studentAttendance.length ? `${Math.round((studentAttendance.filter((record) => record.status === "present").length / studentAttendance.length) * 100)}%` : "—"}</p></div></div></section><div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"><section className="space-y-4"><div className="flex items-end justify-between"><div><h2 className="text-[22px] font-semibold text-ink">Milestone submissions</h2><p className="mt-1 text-sm text-ink-muted">Review evidence and confirm each step.</p></div><span className="text-sm text-ink-muted">{studentMilestones.filter((milestone) => milestone.status === "pending").length} pending</span></div>{studentMilestones.map((milestone) => <div key={milestone.id} className="space-y-3"><MilestoneCard milestone={milestone} />{milestone.status === "pending" && <div className="flex justify-end"><ApprovalButtons role="mentor" /></div>}</div>)}</section><div className="space-y-6"><ChartWrapper data={trend} /><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="p-5 pb-2"><CardTitle className="text-base font-semibold text-ink">Attendance log</CardTitle><p className="mt-1 text-[13px] text-ink-muted">Recent check-in records for this internship.</p></CardHeader><CardContent className="p-5 pt-3"><div className="space-y-3">{studentAttendance.map((record) => <div key={record.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"><div className="flex items-center gap-2.5"><CalendarCheck2 className="size-4 text-primary" /><span className="text-sm text-ink">{new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(record.date))}</span></div><span className="text-[13px] font-medium capitalize text-ink-muted">{record.status}</span></div>)}</div></CardContent></Card></div></div></main></div></div>
}
