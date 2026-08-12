"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"
import { LogIn } from "lucide-react"
import { dashboardForRole, mockSessionKey, mockSessionRoleKey } from "@/components/shared/MockRouteGuard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { users } from "@/lib/mock-data"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get("email") ?? "").trim().toLowerCase()
    const matchedUser = users.find((user) => user.email.toLowerCase() === email)

    if (!matchedUser) {
      setError("No demo account was found for that email.")
      return
    }

    window.localStorage.setItem(mockSessionKey, matchedUser.id)
    window.localStorage.setItem(mockSessionRoleKey, matchedUser.role)
    router.push(dashboardForRole(matchedUser.role))
  }

  return <main className="flex min-h-screen items-center justify-center bg-canvas px-5 py-10"><Card className="w-full max-w-[420px] rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="space-y-3 p-6 pb-2 text-center"><div className="mx-auto flex size-11 items-center justify-center rounded-md bg-primary text-sm font-bold text-white">TW</div><div><CardTitle className="text-[24px] font-bold tracking-[-0.3px] text-ink">Sign in to TrackWise</CardTitle><p className="mt-2 text-sm leading-6 text-ink-muted">Use any mock user email to open the matching role workspace.</p></div></CardHeader><CardContent className="p-6"><form onSubmit={handleSubmit} className="space-y-4"><div className="grid gap-2"><Label htmlFor="email" className="text-ink">Email</Label><Input id="email" name="email" type="email" required placeholder="aarav.mehta@example.com" className="border-border bg-surface-1 text-ink placeholder:text-ink-subtle" /></div><div className="grid gap-2"><Label htmlFor="password" className="text-ink">Password</Label><Input id="password" name="password" type="password" required placeholder="Any password for demo" className="border-border bg-surface-1 text-ink placeholder:text-ink-subtle" /></div>{error && <p className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-ink-muted">{error}</p>}<Button type="submit" className="w-full bg-primary text-white hover:bg-[var(--primary-hover)]"><LogIn className="size-4" />Login</Button></form><Link href="/forgot-password" className="mt-5 block text-center text-sm font-medium text-primary hover:underline">Forgot password?</Link></CardContent></Card></main>
}
