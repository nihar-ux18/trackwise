import { Bell } from "lucide-react"
import { AccountMenu } from "@/components/shared/AccountMenu"
import { Button } from "@/components/ui/button"
import type { User } from "@/lib/mock-data/users"

export function Topbar({ user }: { user: User }) {
  return <header className="flex min-h-20 items-center justify-between border-b border-border bg-surface-1 px-5 md:px-8"><div><p className="text-[13px] text-ink-muted">{user.organization}</p><p className="text-sm font-semibold capitalize text-ink">{user.role} workspace</p></div><div className="flex items-center gap-3"><Button aria-label="Notifications" size="icon" variant="ghost" className="text-ink-muted"><Bell /></Button><AccountMenu user={user} /></div></header>
}
