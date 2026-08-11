"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpenCheck, BriefcaseBusiness, CalendarCheck2, ClipboardCheck, FileCheck2, LayoutDashboard, Settings, Users, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { UserRole } from "@/lib/mock-data/users"

type NavItem = { label: string; href: string; icon: LucideIcon }
const navigation: Record<UserRole, NavItem[]> = {
  student: [{ label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard }, { label: "My internship", href: "/student/internship", icon: BriefcaseBusiness }, { label: "Milestones", href: "/student/milestones", icon: ClipboardCheck }, { label: "Attendance", href: "/student/attendance", icon: CalendarCheck2 }, { label: "Skill Gap Report", href: "/student/skill-gap", icon: BookOpenCheck }],
  mentor: [{ label: "Dashboard", href: "/mentor/dashboard", icon: LayoutDashboard }, { label: "Review queue", href: "/mentor/reviews", icon: FileCheck2 }, { label: "Students", href: "/mentor/students", icon: Users }, { label: "Add student", href: "/mentor/add-student", icon: Users }],
  industry: [{ label: "Dashboard", href: "/industry/dashboard", icon: LayoutDashboard }],
}

export function Sidebar({ role = "student" }: { role?: UserRole }) {
  const pathname = usePathname()
  return <aside className="flex w-full shrink-0 flex-col border-b border-border bg-surface-1 md:fixed md:inset-y-0 md:w-[240px] md:border-b-0 md:border-r"><div className="flex h-20 items-center gap-3 px-6"><div className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">TW</div><div><p className="font-semibold text-ink">TrackWise</p><p className="text-[11px] text-ink-subtle">Verified internships</p></div></div><div className="flex flex-1 flex-col justify-between px-3 pb-5"><nav aria-label={`${role} navigation`} className="space-y-1">{navigation[role].map(({ label, href, icon: Icon }) => { const active = pathname === href; return <Link key={href} href={href} className={cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink", active && "bg-primary/10 text-primary")}><Icon className="size-[18px]" />{label}</Link> })}</nav><Link href="/settings" className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-2 hover:text-ink"><Settings className="size-[18px]" />Settings</Link></div></aside>
}
