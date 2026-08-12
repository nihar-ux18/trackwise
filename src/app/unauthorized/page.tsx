"use client"

import { useRouter } from "next/navigation"
import { ShieldAlert } from "lucide-react"
import { dashboardForRole, mockSessionRoleKey } from "@/components/shared/MockRouteGuard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { UserRole } from "@/lib/mock-data/users"

export default function UnauthorizedPage() {
  const router = useRouter()

  function returnToWorkspace() {
    const role = window.localStorage.getItem(mockSessionRoleKey) as UserRole | null
    router.push(role ? dashboardForRole(role) : "/login")
  }

  return <main className="flex min-h-screen items-center justify-center bg-canvas px-5 py-10"><Card className="w-full max-w-[420px] rounded-lg border border-border bg-surface-1 shadow-none"><CardContent className="p-8 text-center"><div className="mx-auto flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary"><ShieldAlert className="size-6" /></div><h1 className="mt-5 text-[24px] font-bold tracking-[-0.3px] text-ink">You don&apos;t have access to this page</h1><p className="mt-2 text-sm leading-6 text-ink-muted">TrackWise keeps each workspace scoped to the signed-in role.</p><Button type="button" onClick={returnToWorkspace} className="mt-6 bg-primary text-white hover:bg-[var(--primary-hover)]">Return to your dashboard</Button></CardContent></Card></main>
}
