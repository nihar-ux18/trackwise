import { CalendarDays, CheckCircle2, Clock3, XCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge, type StatusBadgeStatus } from "./StatusBadge"
import type { Milestone, MilestoneStatus } from "@/lib/mock-data/milestones"

const statusMap: Record<MilestoneStatus, StatusBadgeStatus> = { pending: "pending", approved: "verified", rejected: "flagged" }
const statusIcon = { pending: Clock3, approved: CheckCircle2, rejected: XCircle }

export function MilestoneCard({ milestone }: { milestone: Milestone }) {
  const Icon = statusIcon[milestone.status]
  return <Card className="rounded-lg border border-border bg-surface-1 shadow-none">
    <CardHeader className="flex-row items-start justify-between gap-3 p-5 pb-2"><div className="flex items-start gap-3"><Icon className="mt-0.5 size-5 text-primary" /><CardTitle className="text-base font-semibold text-ink">{milestone.title}</CardTitle></div><StatusBadge status={statusMap[milestone.status]} /></CardHeader>
    <CardContent className="p-5 pt-2"><p className="text-[13px] leading-[1.45] text-ink-muted">{milestone.description}</p><div className="mt-4 flex items-center gap-2 text-[12px] text-ink-subtle"><CalendarDays className="size-3.5" />{new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(milestone.date))}</div></CardContent>
  </Card>
}
