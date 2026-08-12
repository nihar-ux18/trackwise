"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import { MailCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <main className="flex min-h-screen items-center justify-center bg-canvas px-5 py-10"><Card className="w-full max-w-[420px] rounded-lg border border-border bg-surface-1 shadow-none"><CardHeader className="space-y-3 p-6 pb-2 text-center"><div className="mx-auto flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary"><MailCheck className="size-5" /></div><div><CardTitle className="text-[24px] font-bold tracking-[-0.3px] text-ink">Reset your password</CardTitle><p className="mt-2 text-sm leading-6 text-ink-muted">Enter your registered email and we will show the demo reset confirmation.</p></div></CardHeader><CardContent className="p-6">{submitted ? <div className="space-y-5"><p className="rounded-md border border-border bg-surface-2 px-4 py-3 text-sm leading-6 text-ink-muted">If this email is registered, a reset link has been sent.</p><Link href="/login" className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--primary-hover)]">Return to login</Link></div> : <form onSubmit={handleSubmit} className="space-y-4"><div className="grid gap-2"><Label htmlFor="email" className="text-ink">Email</Label><Input id="email" name="email" type="email" required placeholder="aarav.mehta@example.com" className="border-border bg-surface-1 text-ink placeholder:text-ink-subtle" /></div><Button type="submit" className="w-full bg-primary text-white hover:bg-[var(--primary-hover)]">Send reset link</Button><Link href="/login" className="block text-center text-sm font-medium text-primary hover:underline">Back to login</Link></form>}</CardContent></Card></main>
}
