import Link from "next/link"
import { notFound } from "next/navigation"
import { BookOpenCheck, ChevronLeft, ClipboardCheck, Mail, Target } from "lucide-react"
import { MilestoneCard } from "@/components/shared/MilestoneCard"
import { Sidebar } from "@/components/shared/Sidebar"
import { StatCard } from "@/components/shared/StatCard"
import { Topbar } from "@/components/shared/Topbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { milestones, skillGap, users } from "@/lib/mock-data"

export default async function IndustryStudentProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const student = users.find((user) => user.id === id && user.role === "student")

  if (!student) {
    notFound()
  }

  const industryUser = users.find((user) => user.role === "industry")!
  const approvedMilestones = milestones.filter((milestone) => milestone.studentId === student.id && milestone.status === "approved")
  const studentSkillGap = skillGap.studentId === student.id ? skillGap : undefined

  return <div className="min-h-screen bg-canvas"><Sidebar role="industry" /><div className="md:pl-[240px]"><Topbar user={industryUser} /><main className="mx-auto max-w-[1100px] space-y-8 px-5 py-8 md:px-8"><Link href="/industry/dashboard" className="inline-flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-primary"><ChevronLeft className="size-4" />Back to industry dashboard</Link><section className="flex flex-col justify-between gap-5 rounded-lg border border-border bg-surface-1 p-6 sm:flex-row sm:items-center"><div className="flex items-center gap-4"><div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">{student.avatarInitials}</div><div><h1 className="text-[22px] font-semibold tracking-[-0.2px] text-ink">{student.name}</h1><p className="mt-1 text-sm text-ink-muted">{student.internshipTitle ?? "Internship student"}</p><p className="mt-2 flex items-center gap-1.5 text-[13px] text-ink-subtle"><Mail className="size-3.5" />{student.email}</p></div></div><div className="grid grid-cols-2 gap-5 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><div><p className="text-[12px] uppercase tracking-[0.2px] text-ink-subtle">Verified</p><p className="mt-1 text-xl font-bold text-ink">{approvedMilestones.length}</p></div><div><p className="text-[12px] uppercase tracking-[0.2px] text-ink-subtle">Readiness</p><p className="mt-1 text-xl font-bold text-ink">{studentSkillGap ? `${studentSkillGap.score}%` : "N/A"}</p></div></div></section><section className="grid gap-4 sm:grid-cols-2"><StatCard label="Approved milestones" value={approvedMilestones.length} detail="Verified records shared" icon={ClipboardCheck} /><StatCard label="Readiness score" value={studentSkillGap ? `${studentSkillGap.score}%` : "N/A"} detail={studentSkillGap ? "Current student report" : "No shared report yet"} icon={BookOpenCheck} /></section><section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="p-6 pb-3"><div className="flex items-center gap-2 text-primary"><Target className="size-5" /><CardTitle className="text-base font-semibold text-ink">Readiness summary</CardTitle></div><p className="mt-1 text-[13px] text-ink-muted">A read-only view of the student&apos;s shared skill profile.</p></CardHeader><CardContent className="p-6 pt-3">{studentSkillGap ? <><div className="flex items-end gap-3"><span className="text-[56px] font-bold leading-none tracking-[-1px] text-primary">{studentSkillGap.score}</span><span className="pb-1.5 text-sm text-ink-muted">/ 100</span></div><div className="mt-5 h-3 rounded-pill bg-surface-2"><div className="h-3 rounded-pill bg-primary" style={{ width: `${studentSkillGap.score}%` }} /></div><p className="mt-5 text-sm leading-6 text-ink-muted">{studentSkillGap.summary}</p></> : <p className="text-sm leading-6 text-ink-muted">No readiness report is currently shared for this student.</p>}</CardContent></Card><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="p-6 pb-3"><CardTitle className="text-base font-semibold text-ink">Verified milestones only</CardTitle><p className="mt-1 text-[13px] text-ink-muted">Pending and rejected submissions are hidden from industry view.</p></CardHeader><CardContent className="grid gap-4 p-6 pt-2">{approvedMilestones.length ? approvedMilestones.map((milestone) => <MilestoneCard key={milestone.id} milestone={milestone} />) : <p className="rounded-md border border-border bg-surface-2 p-4 text-sm text-ink-muted">No approved milestones are available yet.</p>}</CardContent></Card></section></main></div></div>
}
