"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, ClipboardCheck, FilePlus2, LinkIcon, Plus } from "lucide-react"
import { MilestoneCard } from "@/components/shared/MilestoneCard"
import { Sidebar } from "@/components/shared/Sidebar"
import { StatCard } from "@/components/shared/StatCard"
import { Topbar } from "@/components/shared/Topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { milestones, users, type Milestone } from "@/lib/mock-data"

type DemoMilestone = Milestone & {
  proofLink?: string
}

const currentUser = users.find((user) => user.id === "student-001")!
const initialMilestones = milestones.filter((milestone) => milestone.studentId === currentUser.id)

export default function StudentMilestonesPage() {
  const [open, setOpen] = useState(false)
  const [studentMilestones, setStudentMilestones] = useState<DemoMilestone[]>(initialMilestones)
  const approvedCount = studentMilestones.filter((milestone) => milestone.status === "approved").length
  const pendingCount = studentMilestones.filter((milestone) => milestone.status === "pending").length

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const title = String(formData.get("title") ?? "").trim()
    const description = String(formData.get("description") ?? "").trim()
    const proofLink = String(formData.get("proofLink") ?? "").trim()
    const date = String(formData.get("date") ?? "").trim()

    if (!title || !description || !proofLink || !date) return

    setStudentMilestones((current) => [
      {
        id: `milestone-demo-${Date.now()}`,
        title,
        description,
        proofLink,
        date,
        status: "pending",
        studentId: currentUser.id,
      },
      ...current,
    ])
    event.currentTarget.reset()
    setOpen(false)
  }

  return <div className="min-h-screen bg-canvas"><Sidebar role="student" /><div className="md:pl-[240px]"><Topbar user={currentUser} /><main className="mx-auto max-w-[1000px] space-y-8 px-5 py-8 md:px-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-medium text-primary">Student workspace</p><h1 className="mt-2 text-[30px] font-bold leading-tight tracking-[-0.4px] text-ink">Milestones</h1><p className="mt-2 max-w-2xl text-[15px] leading-6 text-ink-muted">Submit internship progress for mentor review and keep your verified record current.</p></div><Dialog open={open} onOpenChange={setOpen}><DialogTrigger render={<Button className="w-fit bg-accent text-white hover:bg-[var(--accent-hover)]" />}><Plus className="size-4" />Add Milestone</DialogTrigger><DialogContent className="border border-border bg-surface-1 p-0 shadow-none sm:max-w-[520px]"><form onSubmit={handleSubmit}><DialogHeader className="p-6 pb-2"><DialogTitle className="text-lg font-semibold text-ink">Add Milestone</DialogTitle><DialogDescription className="text-sm leading-6 text-ink-muted">Share a progress update with evidence for mentor review.</DialogDescription></DialogHeader><div className="grid gap-4 p-6 pt-4"><div className="grid gap-2"><Label htmlFor="title" className="text-ink">Title</Label><Input id="title" name="title" required placeholder="Prototype review" className="border-border bg-surface-1 text-ink placeholder:text-ink-subtle" /></div><div className="grid gap-2"><Label htmlFor="description" className="text-ink">Description</Label><textarea id="description" name="description" required rows={4} placeholder="Summarize the work completed and why it matters." className="min-h-[112px] w-full rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm text-ink outline-none placeholder:text-ink-subtle focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50" /></div><div className="grid gap-2"><Label htmlFor="proofLink" className="text-ink">Proof / evidence link</Label><Input id="proofLink" name="proofLink" type="url" required placeholder="https://..." className="border-border bg-surface-1 text-ink placeholder:text-ink-subtle" /></div><div className="grid gap-2"><Label htmlFor="date" className="text-ink">Date</Label><Input id="date" name="date" type="date" required className="border-border bg-surface-1 text-ink" /></div></div><DialogFooter className="border-border bg-surface-2 p-4"><Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button type="submit" className="bg-accent text-white hover:bg-[var(--accent-hover)]"><FilePlus2 className="size-4" />Submit milestone</Button></DialogFooter></form></DialogContent></Dialog></div><section aria-label="Milestone summary" className="grid gap-4 sm:grid-cols-3"><StatCard label="All milestones" value={studentMilestones.length} detail="Submitted records" icon={ClipboardCheck} /><StatCard label="Approved" value={approvedCount} detail="Verified by mentor" icon={ClipboardCheck} /><StatCard label="Pending" value={pendingCount} detail="Awaiting review" icon={ClipboardCheck} /></section><Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="flex-row items-center justify-between gap-4 p-5 pb-3"><div><CardTitle className="text-base font-semibold text-ink">Submitted milestones</CardTitle><p className="mt-1 text-[13px] text-ink-muted">A complete list of your internship progress entries.</p></div><span className="text-sm text-ink-muted">{studentMilestones.length} total</span></CardHeader><CardContent className="grid gap-4 p-5 pt-2">{studentMilestones.map((milestone) => <div key={milestone.id} className="space-y-2"><MilestoneCard milestone={milestone} />{milestone.proofLink && <a href={milestone.proofLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary hover:underline"><LinkIcon className="size-3.5" />View evidence <ArrowUpRight className="size-3.5" /></a>}</div>)}</CardContent></Card></main></div></div>
}
