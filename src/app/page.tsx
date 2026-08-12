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
  return <main className="min-h-screen bg-canvas text-ink"><section className="relative isolate overflow-hidden px-5 py-6 text-white md:px-8"><div className="absolute inset-0 -z-10 bg-primary" /><div className="mesh-blob mesh-blob-primary -left-48 -top-48 -z-10" /><div className="mesh-blob mesh-blob-primary-light left-[24%] top-[-220px] -z-10" /><div className="mesh-blob mesh-blob-accent right-[-180px] top-10 -z-10" /><div className="mesh-blob mesh-blob-accent-light bottom-[-260px] left-[42%] -z-10" /><div className="absolute inset-0 -z-10 bg-black/20" /><div className="relative mx-auto flex min-h-[640px] max-w-[1120px] flex-col"><header className="flex items-center justify-between gap-4 py-3"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-md bg-white/15 text-sm font-bold text-white ring-1 ring-white/25">TW</div><div><p className="font-semibold text-white">TrackWise</p><p className="text-[12px] text-white/70">Verified internships</p></div></div><Link href="/login" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-primary hover:bg-white/90">Login <ArrowRight className="size-4" /></Link></header><div className="flex flex-1 items-center py-14 md:py-20"><div className="max-w-[760px]"><div className="inline-flex items-center rounded-pill border border-white/25 bg-white/15 px-3 py-1 text-[13px] font-medium text-white">Verified Internship Lifecycle Platform</div><h1 className="mt-6 text-[42px] font-bold leading-[1.08] tracking-[-0.8px] text-white md:text-[56px]">TrackWise</h1><p className="mt-5 max-w-[680px] text-[18px] leading-8 text-white/82">A calm, role-based workspace for internship progress where students submit work, mentors verify it, and industry partners see only trusted records.</p><Link href="/login" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90">Get Started <ArrowRight className="size-4" /></Link></div></div></div></section><section aria-label="TrackWise lifecycle" className="bg-canvas px-5 py-12 md:px-8"><div className="mx-auto grid max-w-[1120px] gap-4 md:grid-cols-3">{lifecycleSteps.map(({ title, description, icon: Icon }) => <div key={title} className="rounded-lg border border-border bg-surface-1 p-5"><div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"><Icon className="size-5" /></div><h2 className="mt-4 text-base font-semibold text-ink">{title}</h2><p className="mt-2 text-sm leading-6 text-ink-muted">{description}</p></div>)}</div></section></main>
}
