"use client"

import { useState } from "react"
import { CheckCircle2, KeyRound, UserPlus } from "lucide-react"
import { Sidebar } from "@/components/shared/Sidebar"
import { Topbar } from "@/components/shared/Topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { users } from "@/lib/mock-data"

const mentor = users.find((user) => user.id === "mentor-001")!

export default function AddStudentPage() {
  const [passwordMode, setPasswordMode] = useState<"generate" | "manual">("generate")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <div className="min-h-screen bg-canvas"><Sidebar role="mentor" /><div className="md:pl-[240px]"><Topbar user={mentor} /><main className="mx-auto max-w-[760px] space-y-8 px-5 py-8 md:px-8"><div><p className="text-sm font-medium text-primary">Mentor workspace</p><h1 className="mt-2 text-[30px] font-bold leading-tight tracking-[-0.4px] text-ink">Add a student</h1><p className="mt-2 text-[15px] text-ink-muted">Create a student profile and prepare their access details for the internship workspace.</p></div>{submitted ? <Card className="rounded-lg border border-primary/20 bg-surface-1 shadow-none"><CardContent className="flex flex-col items-start gap-4 p-8 sm:flex-row"><div className="rounded-full bg-primary/10 p-3 text-primary"><CheckCircle2 className="size-6" /></div><div><h2 className="text-lg font-semibold text-ink">Student profile ready</h2><p className="mt-1 text-sm leading-6 text-ink-muted">The demo student has been added successfully. Access details would be issued here in the connected version.</p><Button type="button" variant="outline" className="mt-5" onClick={() => setSubmitted(false)}>Add another student</Button></div></CardContent></Card> : <Card className="rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="p-6 pb-3"><div className="flex items-center gap-3"><div className="rounded-md bg-primary/10 p-2 text-primary"><UserPlus className="size-5" /></div><div><CardTitle className="text-base font-semibold text-ink">Student details</CardTitle><CardDescription className="mt-1">Enter the student’s basic account information.</CardDescription></div></div></CardHeader><CardContent className="p-6 pt-3"><form onSubmit={handleSubmit} className="space-y-5"><div className="space-y-2"><Label htmlFor="student-name">Student name</Label><Input id="student-name" name="name" placeholder="e.g. Priya Shah" required /></div><div className="space-y-2"><Label htmlFor="student-email">Student email</Label><Input id="student-email" name="email" type="email" placeholder="student@example.com" required /></div><div className="space-y-3"><Label htmlFor="password-mode">Password setup</Label><div className="flex flex-col gap-3 sm:flex-row"><label className="flex flex-1 cursor-pointer items-start gap-3 rounded-md border border-border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5"><input className="mt-1 accent-[var(--primary)]" type="radio" name="password-mode" value="generate" checked={passwordMode === "generate"} onChange={() => setPasswordMode("generate")} /><span><span className="block text-sm font-medium text-ink">Auto-generate</span><span className="mt-1 block text-[13px] text-ink-muted">Create a temporary password for the student.</span></span></label><label className="flex flex-1 cursor-pointer items-start gap-3 rounded-md border border-border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5"><input className="mt-1 accent-[var(--primary)]" type="radio" name="password-mode" value="manual" checked={passwordMode === "manual"} onChange={() => setPasswordMode("manual")} /><span><span className="block text-sm font-medium text-ink">Set manually</span><span className="mt-1 block text-[13px] text-ink-muted">Choose a temporary password now.</span></span></label></div></div>{passwordMode === "manual" && <div className="space-y-2"><Label htmlFor="student-password">Temporary password</Label><div className="relative"><KeyRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle" /><Input className="pl-9" id="student-password" name="password" type="password" minLength={8} placeholder="At least 8 characters" required /></div></div>}<div className="flex justify-end border-t border-border pt-5"><Button type="submit" className="bg-accent text-white hover:bg-[var(--accent-hover)]">Add student <UserPlus /></Button></div></form></CardContent></Card>}</main></div></div>
}
