import Link from "next/link"
import { ArrowRight, Building2, GraduationCap, ShieldCheck } from "lucide-react"

const lifecycleSteps = [
  {
    title: "Student submits",
    description: "Interns record milestones, attendance, and evidence in one structured workspace.",
    icon: GraduationCap,
  },
  {
    title: "Mentor verifies",
    description: "Faculty mentors review progress and approve only the work that meets the standard.",
    icon: ShieldCheck,
  },
  {
    title: "Industry sees verified data",
    description: "Partners get a clear read-only view of approved milestones and readiness signals.",
    icon: Building2,
  },
]

export default function Home() {
  return <main className="min-h-screen bg-canvas px-5 py-6 text-ink md:px-8"><div className="mx-auto flex min-h-[calc(100vh-48px)] max-w-[1120px] flex-col"><header className="flex items-center justify-between gap-4 py-3"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">TW</div><div><p className="font-semibold text-ink">TrackWise</p><p className="text-[12px] text-ink-subtle">Verified internships</p></div></div><Link href="/login" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]">Login <ArrowRight className="size-4" /></Link></header><section className="flex flex-1 items-center py-14 md:py-20"><div className="max-w-[760px]"><div className="inline-flex items-center rounded-pill border border-border bg-surface-1 px-3 py-1 text-[13px] font-medium text-primary">Verified Internship Lifecycle Platform</div><h1 className="mt-6 text-[42px] font-bold leading-[1.08] tracking-[-0.8px] text-ink md:text-[56px]">TrackWise</h1><p className="mt-5 max-w-[680px] text-[18px] leading-8 text-ink-muted">A calm, role-based workspace for internship progress where students submit work, mentors verify it, and industry partners see only trusted records.</p><Link href="/login" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]">Get Started <ArrowRight className="size-4" /></Link></div></section><section aria-label="TrackWise lifecycle" className="grid gap-4 pb-12 md:grid-cols-3">{lifecycleSteps.map(({ title, description, icon: Icon }) => <div key={title} className="rounded-lg border border-border bg-surface-1 p-5"><div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="size-5" /></div><h2 className="mt-4 text-base font-semibold text-ink">{title}</h2><p className="mt-2 text-sm leading-6 text-ink-muted">{description}</p></div>)}</section></div></main>
}
