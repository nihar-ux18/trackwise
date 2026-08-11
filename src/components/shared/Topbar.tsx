import { Bell, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import type { User } from "@/lib/mock-data/users"

export function Topbar({ user }: { user: User }) {
  return <header className="flex min-h-20 items-center justify-between border-b border-border bg-surface-1 px-5 md:px-8"><div><p className="text-[13px] text-ink-muted">{user.organization}</p><p className="text-sm font-semibold capitalize text-ink">{user.role} workspace</p></div><div className="flex items-center gap-3"><Button aria-label="Notifications" size="icon" variant="ghost" className="text-ink-muted"><Bell /></Button><div className="flex items-center gap-2 border-l border-border pl-3"><Avatar className="size-8 rounded-md"><AvatarFallback className="rounded-md bg-primary/10 text-xs font-semibold text-primary">{user.avatarInitials}</AvatarFallback></Avatar><span className="hidden text-sm font-medium text-ink sm:inline">{user.name}</span><ChevronDown className="hidden size-4 text-ink-subtle sm:inline" /></div></div></header>
}
