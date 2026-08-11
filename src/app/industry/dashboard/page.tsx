import Link from "next/link"
import { ArrowUpRight, BookOpenCheck, ClipboardCheck, Users } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/shared/Sidebar"
import { StatCard } from "@/components/shared/StatCard"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { Topbar } from "@/components/shared/Topbar"
import { milestones, skillGap, users } from "@/lib/mock-data"

const industryUser = users.find((user) => user.role === "industry")!
const linkedStudents = users.filter((user) => user.role === "student")
const approvedMilestones = milestones.filter((milestone) => milestone.status === "approved")

export default function IndustryDashboardPage() {
  const verifiedCount = approvedMilestones.length

  return <div className="min-h-screen bg-canvas"><Sidebar role="industry" /><div className="md:pl-[240px]"><Topbar user={industryUser} /><main className="mx-auto max-w-[1200px] space-y-8 px-5 py-8 md:px-8"><div><p className="text-sm font-medium text-primary">Industry workspace</p><h1 className="mt-2 text-[30px] font-bold leading-tight tracking-[-0.4px] text-ink">Linked students</h1><p className="mt-2 max-w-2xl text-[15px] leading-6 text-ink-muted">A read-only view of verified internship progress shared with {industryUser.organization}.</p></div><section aria-label="Industry overview" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><StatCard label="Shared students" value={linkedStudents.length} detail="Active internship profiles" icon={Users} /><StatCard label="Verified milestones" value={verifiedCount} detail="Approved records visible" icon={ClipboardCheck} /><StatCard label="Readiness available" value={skillGap.score ? "1" : "0"} detail="Student score reports" icon={BookOpenCheck} /></section><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="flex-row items-center justify-between gap-4 p-5 pb-3"><div><CardTitle className="text-base font-semibold text-ink">Student profiles</CardTitle><p className="mt-1 text-[13px] text-ink-muted">Open a profile to view approved work and readiness details.</p></div><span className="text-sm text-ink-muted">{linkedStudents.length} shared</span></CardHeader><CardContent className="grid gap-3 p-5 pt-2">{linkedStudents.map((student) => { const studentApprovedCount = approvedMilestones.filter((milestone) => milestone.studentId === student.id).length; const readinessText = skillGap.studentId === student.id ? `${skillGap.score}% readiness` : `${studentApprovedCount} verified`; return <Link key={student.id} href={`/industry/student/${student.id}`} className="flex items-center justify-between gap-4 rounded-md border border-border p-4 transition-colors hover:bg-surface-2"><div className="flex min-w-0 items-center gap-3"><Avatar className="size-10 rounded-md"><AvatarFallback className="rounded-md bg-primary/10 text-xs font-semibold text-primary">{student.avatarInitials}</AvatarFallback></Avatar><div className="min-w-0"><p className="truncate text-sm font-semibold text-ink">{student.name}</p><p className="mt-1 truncate text-[13px] text-ink-muted">{student.internshipTitle ?? "Internship student"}</p></div></div><div className="flex shrink-0 items-center gap-3"><StatusBadge status={studentApprovedCount > 0 ? "verified" : "review"} /><span className="hidden text-[13px] text-ink-muted sm:inline">{readinessText}</span><ArrowUpRight className="size-4 text-ink-subtle" /></div></Link> })}</CardContent></Card></main></div></div>
}
