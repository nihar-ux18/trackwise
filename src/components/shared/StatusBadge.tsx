import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type StatusBadgeStatus = "verified" | "pending" | "review" | "flagged"

const labels: Record<StatusBadgeStatus, string> = {
  verified: "Verified",
  pending: "Pending",
  review: "In review",
  flagged: "Flagged",
}

const statusClasses: Record<StatusBadgeStatus, string> = {
  verified: "!bg-[var(--status-verified-bg)] !text-status-verified",
  pending: "!bg-[var(--status-pending-bg)] !text-status-pending",
  review: "!bg-[var(--status-review-bg)] !text-status-review",
  flagged: "!bg-[var(--status-flagged-bg)] !text-status-flagged",
}

export function StatusBadge({ status, className }: { status: StatusBadgeStatus; className?: string }) {
  return <Badge className={cn("rounded-pill border-0 px-[10px] py-1 text-[12px] font-medium tracking-[0.2px]", statusClasses[status], className)}>{labels[status]}</Badge>
}
