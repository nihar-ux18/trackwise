import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatCard({ label, value, detail, icon: Icon, className }: { label: string; value: string | number; detail?: string; icon?: React.ComponentType<{ className?: string }>; className?: string }) {
  return <Card className={cn("rounded-lg border border-border bg-surface-1 shadow-none", className)}>
    <CardContent className="flex items-start justify-between gap-4 p-5">
      <div><p className="text-[12px] font-medium uppercase tracking-[0.2px] text-ink-subtle">{label}</p><p className="mt-2 text-[30px] font-bold leading-tight tracking-[-0.4px] text-ink">{value}</p>{detail && <p className="mt-1 text-[13px] text-ink-muted">{detail}</p>}</div>
      {Icon && <div className="rounded-md bg-surface-2 p-2 text-primary"><Icon className="size-5" /></div>}
    </CardContent>
  </Card>
}
